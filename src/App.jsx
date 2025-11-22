// src/App.jsx
import { useEffect, useState } from "react";
import { QUESTIONS } from "./data/questions";
import Layout from "./components/Layout";
import QuestionForm from "./components/QuestionForm";
import CorrectScreen from "./components/CorrectScreen";
import WrongFirstScreen from "./components/WrongFirstScreen";
import WrongFinalScreen from "./components/WrongFinalScreen";
import NotFoundScreen from "./components/NotFoundScreen";

import WelcomeScreen from "./components/WelcomeScreen";
import HostLobby from "./components/HostLobby";
import PlayerLobby from "./components/PlayerLobby";
import PlayerGame from "./components/PlayerGame";
import SessionEndedScreen from "./components/SessionEndedScreen";

import { supabase } from "./lib/supabaseClient";
import { AnimatePresence, motion } from "framer-motion";

function normalizeAnswer(value) {
  if (!value) return "";
  return value.trim().toLowerCase();
}

const screenVariants = {
  initial: { opacity: 0, y: 16, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -16, scale: 0.98 },
};

function randomCode() {
  return Math.floor(1000 + Math.random() * 9000).toString();
}

function App() {
  const [view, setView] = useState("welcome");
  // "welcome" | "host-lobby" | "player-lobby" | "game-host" | "player-game" | "session-ended"

  const [sessionCode, setSessionCode] = useState("");
  const [connectedCount, setConnectedCount] = useState(1);

  const [sessionPhase, setSessionPhase] = useState("welcome");
  const [sessionCurrentQuestion, setSessionCurrentQuestion] = useState(null);

  /**
   * sessionPhase:
   * - "welcome"
   * - "playing"
   * - "steal"
   * - "resolved_host_correct"
   * - "resolved_steal_correct"
   * - "resolved_all_wrong"
   * - "ended"
   */

  // Host-only state
  const [questionNumber, setQuestionNumber] = useState("");
  const [answer, setAnswer] = useState("");
  const [attempt, setAttempt] = useState(0);
  const [status, setStatus] = useState("idle");
  // "idle" | "correct" | "wrongFirst" | "wrongFinal" | "notFound"

  const [currentQuestionData, setCurrentQuestionData] = useState(null);
  const [lastUserAnswer, setLastUserAnswer] = useState("");
  const [resolvedBySteal, setResolvedBySteal] = useState(false);

  // Realtime devices
  useEffect(() => {
    if (!sessionCode) return;

    let isMounted = true;

    const fetchCount = async () => {
      const { count, error } = await supabase
        .from("devices")
        .select("*", { count: "exact", head: true })
        .eq("session_code", sessionCode);

      if (error) {
        console.error("Error trayendo devices:", error);
        return;
      }

      if (isMounted) setConnectedCount(count ?? 1);
    };

    fetchCount();

    const channel = supabase
      .channel(`devices-${sessionCode}`)
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "devices",
          filter: `session_code=eq.${sessionCode}`,
        },
        () => {
          fetchCount();
        }
      )
      .subscribe();

    return () => {
      isMounted = false;
      supabase.removeChannel(channel);
    };
  }, [sessionCode]);

  // Realtime session state
  useEffect(() => {
    if (!sessionCode) return;

    let isMounted = true;

    const fetchSessionState = async () => {
      const { data, error } = await supabase
        .from("sessions")
        .select("current_question, phase")
        .eq("code", sessionCode)
        .maybeSingle();

      if (error) {
        console.error("Error trayendo sesión:", error);
        return;
      }
      if (!data) return;

      if (isMounted) {
        setSessionPhase(data.phase || "welcome");
        setSessionCurrentQuestion(data.current_question || null);
      }
    };

    fetchSessionState();

    const channel = supabase
      .channel(`session-${sessionCode}`)
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "sessions",
          filter: `code=eq.${sessionCode}`,
        },
        (payload) => {
          const newRow = payload.new;
          if (!newRow || !isMounted) return;
          setSessionPhase(newRow.phase || "welcome");
          setSessionCurrentQuestion(newRow.current_question || null);
        }
      )
      .subscribe();

    return () => {
      isMounted = false;
      supabase.removeChannel(channel);
    };
  }, [sessionCode]);

  // Jugadores: lobby → game
  useEffect(() => {
    if (view === "player-lobby") {
      if (
        sessionPhase === "playing" ||
        sessionPhase === "steal" ||
        sessionPhase === "resolved_host_correct" ||
        sessionPhase === "resolved_steal_correct" ||
        sessionPhase === "resolved_all_wrong"
      ) {
        setView("player-game");
      }
    }
  }, [view, sessionPhase]);

  // Host reacciona a resoluciones por robo
  useEffect(() => {
    if (view !== "game-host") return;
    if (!currentQuestionData) return;

    if (sessionPhase === "resolved_steal_correct") {
      setResolvedBySteal(true);
      setStatus("correct");
      setAttempt(0);
    } else if (sessionPhase === "resolved_all_wrong") {
      setResolvedBySteal(true); // robo fallido
      setStatus("wrongFinal");
      setAttempt(0);
    }
  }, [view, sessionPhase, currentQuestionData]);

  // Sesión terminada
  useEffect(() => {
    if (!sessionCode) return;
    if (sessionPhase === "ended") {
      setStatus("idle");
      setAttempt(0);
      setCurrentQuestionData(null);
      setLastUserAnswer("");
      setView("session-ended");
    }
  }, [sessionPhase, sessionCode]);

  const handleCreateHost = async () => {
    const code = randomCode();
    setSessionCode(code);

    const { error: sessionError } = await supabase
      .from("sessions")
      .insert({ code, phase: "welcome", current_question: null });

    if (sessionError) {
      console.error("Error creando sesión:", sessionError);
      alert("Hubo un problema creando la sesión.");
      return;
    }

    await supabase.from("devices").insert({ session_code: code });

    setConnectedCount(1);
    setView("host-lobby");
  };

  const handleJoinAsPlayer = async (code) => {
    const trimmed = code.trim().toUpperCase();
    if (!trimmed) return;

    const { data, error } = await supabase
      .from("sessions")
      .select("code")
      .eq("code", trimmed)
      .maybeSingle();

    if (error || !data) {
      alert("Ese código no existe. Verifica con el host.");
      return;
    }

    setSessionCode(trimmed);

    await supabase.from("devices").insert({ session_code: trimmed });

    setView("player-lobby");
  };

  const handleHostStartGame = async () => {
    if (sessionCode) {
      await supabase
        .from("sessions")
        .update({ phase: "playing", current_question: null })
        .eq("code", sessionCode);
    }

    setView("game-host");
    setQuestionNumber("");
    setAnswer("");
    setAttempt(0);
    setStatus("idle");
    setCurrentQuestionData(null);
    setLastUserAnswer("");
    setResolvedBySteal(false);
  };

  const handleEndSession = async () => {
    if (!sessionCode) return;

    try {
      await supabase
        .from("sessions")
        .update({ phase: "ended" })
        .eq("code", sessionCode);
      await supabase.from("devices").delete().eq("session_code", sessionCode);
    } catch (e) {
      console.error("Error terminando sesión:", e);
    }

    setView("session-ended");
  };

  const handleBackToHomeAfterEnd = () => {
    setSessionCode("");
    setSessionPhase("welcome");
    setSessionCurrentQuestion(null);
    setQuestionNumber("");
    setAnswer("");
    setAttempt(0);
    setStatus("idle");
    setCurrentQuestionData(null);
    setLastUserAnswer("");
    setResolvedBySteal(false);
    setConnectedCount(1);
    setView("welcome");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const num = parseInt(questionNumber, 10);

    if (!num || !QUESTIONS[num]) {
      setStatus("notFound");
      setCurrentQuestionData(null);

      if (sessionCode) {
        await supabase
          .from("sessions")
          .update({ current_question: null, phase: "playing" })
          .eq("code", sessionCode);
      }

      return;
    }

    const qData = QUESTIONS[num];
    const user = normalizeAnswer(answer);
    const correct = normalizeAnswer(qData.correct);

    setCurrentQuestionData({
      number: num,
      explanation: qData.explanation,
      correctLetter: qData.correct,
    });
    setLastUserAnswer(answer);

    if (sessionCode) {
      await supabase
        .from("sessions")
        .update({ current_question: num })
        .eq("code", sessionCode);
    }

    if (user === correct) {
      setStatus("correct");
      setAttempt(0);
      setResolvedBySteal(false);

      if (sessionCode) {
        await supabase
          .from("sessions")
          .update({ phase: "resolved_host_correct" })
          .eq("code", sessionCode);
      }
      return;
    }

    setAttempt(1);
    setStatus("wrongFirst");
    setResolvedBySteal(false);

    if (sessionCode) {
      await supabase
        .from("sessions")
        .update({ phase: "steal" })
        .eq("code", sessionCode);
    }
  };

  const resetForNext = async () => {
    setQuestionNumber("");
    setAnswer("");
    setAttempt(0);
    setStatus("idle");
    setCurrentQuestionData(null);
    setLastUserAnswer("");
    setResolvedBySteal(false);

    if (sessionCode) {
      await supabase
        .from("sessions")
        .update({ phase: "playing", current_question: null })
        .eq("code", sessionCode);
    }
  };

  const skipSecondAttemptAndShowExplanation = async () => {
    setAttempt(0);
    setStatus("wrongFinal");
    setResolvedBySteal(false);

    if (sessionCode) {
      await supabase
        .from("sessions")
        .update({ phase: "resolved_all_wrong" })
        .eq("code", sessionCode);
    }
  };

  const tryAgainSameQuestion = () => {
    setAnswer("");
    setStatus("idle");
  };

  const showEndButton =
    (view === "host-lobby" || view === "game-host") && !!sessionCode;

  return (
    <Layout onEndSession={showEndButton ? handleEndSession : null}>
      <AnimatePresence mode="wait">
        {view === "welcome" && (
          <motion.div
            key="welcome"
            variants={screenVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <WelcomeScreen
              onJoinAsPlayer={handleJoinAsPlayer}
              onCreateHost={handleCreateHost}
            />
          </motion.div>
        )}

        {view === "host-lobby" && (
          <motion.div
            key="host-lobby"
            variants={screenVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <HostLobby
              code={sessionCode}
              connectedCount={connectedCount}
              onStartGame={handleHostStartGame}
            />
          </motion.div>
        )}

        {view === "player-lobby" && (
          <motion.div
            key="player-lobby"
            variants={screenVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <PlayerLobby code={sessionCode} />
          </motion.div>
        )}

        {view === "player-game" && (
          <motion.div
            key="player-game"
            variants={screenVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <PlayerGame
              code={sessionCode}
              phase={sessionPhase}
              currentQuestionNumber={sessionCurrentQuestion}
            />
          </motion.div>
        )}

        {view === "session-ended" && (
          <motion.div
            key="session-ended"
            variants={screenVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <SessionEndedScreen onBackToHome={handleBackToHomeAfterEnd} />
          </motion.div>
        )}

        {view === "game-host" && (
          <>
            {status === "idle" && (
              <motion.div
                key="idle"
                variants={screenVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <QuestionForm
                  questionNumber={questionNumber}
                  answer={answer}
                  onChangeNumber={setQuestionNumber}
                  onChangeAnswer={setAnswer}
                  onSubmit={handleSubmit}
                  attempt={attempt}
                />
              </motion.div>
            )}

            {status === "correct" && currentQuestionData && (
              <motion.div
                key="correct"
                variants={screenVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <CorrectScreen
                  questionNumber={currentQuestionData.number}
                  userAnswer={lastUserAnswer}
                  explanation={currentQuestionData.explanation}
                  onNext={resetForNext}
                  resolvedBySteal={resolvedBySteal}
                />
              </motion.div>
            )}

            {status === "wrongFirst" && currentQuestionData && (
              <motion.div
                key="wrongFirst"
                variants={screenVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <WrongFirstScreen
                  questionNumber={currentQuestionData.number}
                  userAnswer={lastUserAnswer}
                  onSteal={tryAgainSameQuestion}
                  onSkip={skipSecondAttemptAndShowExplanation}
                />
              </motion.div>
            )}

            {status === "wrongFinal" && currentQuestionData && (
              <motion.div
                key="wrongFinal"
                variants={screenVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <WrongFinalScreen
                  correctLetter={currentQuestionData.correctLetter}
                  explanation={currentQuestionData.explanation}
                  onRestart={resetForNext}
                  resolvedBySteal={resolvedBySteal}
                />
              </motion.div>
            )}

            {status === "notFound" && (
              <motion.div
                key="notFound"
                variants={screenVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <NotFoundScreen onBack={resetForNext} />
              </motion.div>
            )}
          </>
        )}
      </AnimatePresence>
    </Layout>
  );
}

export default App;