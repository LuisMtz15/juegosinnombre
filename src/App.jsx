// src/App.jsx
import { useState } from "react";
import { QUESTIONS } from "./data/questions";
import Layout from "./components/Layout";
import QuestionForm from "./components/QuestionForm";
import CorrectScreen from "./components/CorrectScreen";
import WrongFirstScreen from "./components/WrongFirstScreen";
import WrongFinalScreen from "./components/WrongFinalScreen";
import NotFoundScreen from "./components/NotFoundScreen";

import { AnimatePresence, motion } from "framer-motion";

function normalizeAnswer(value) {
  if (!value) return "";
  return value.trim().toLowerCase();
}

// Variantes para la animación de entrada/salida de cada pantalla
const screenVariants = {
  initial: { opacity: 0, y: 16, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -16, scale: 0.98 },
};

function App() {
  const [questionNumber, setQuestionNumber] = useState("");
  const [answer, setAnswer] = useState("");
  const [attempt, setAttempt] = useState(0); // 0 = primer intento, 1 = segundo intento
  const [status, setStatus] = useState("idle");
  // "idle" | "correct" | "wrongFirst" | "wrongFinal" | "notFound"

  const [currentQuestionData, setCurrentQuestionData] = useState(null);
  const [lastUserAnswer, setLastUserAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const num = parseInt(questionNumber, 10);

    if (!num || !QUESTIONS[num]) {
      setStatus("notFound");
      setCurrentQuestionData(null);
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

    if (user === correct) {
      setStatus("correct");
      setAttempt(0);
      return;
    }

    // incorrecto
    if (attempt === 0) {
      setAttempt(1);
      setStatus("wrongFirst");
    } else {
      setAttempt(0);
      setStatus("wrongFinal");
    }
  };

  const resetForNext = () => {
    setQuestionNumber("");
    setAnswer("");
    setAttempt(0);
    setStatus("idle");
    setCurrentQuestionData(null);
    setLastUserAnswer("");
  };

  const tryAgainSameQuestion = () => {
    // Segundo intento para la misma pregunta (otra persona)
    setAnswer("");
    setStatus("idle");
    // attempt se queda en 1 hasta que se vuelva a enviar
  };

  const skipSecondAttemptAndShowExplanation = () => {
    setAttempt(0);
    setStatus("wrongFinal");
  };

  return (
    <Layout>
      {/* AnimatePresence se encarga del enter/exit cuando cambia el status */}
      <AnimatePresence mode="wait">
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
      </AnimatePresence>
    </Layout>
  );
}

export default App;
