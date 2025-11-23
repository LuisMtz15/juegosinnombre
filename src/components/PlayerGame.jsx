// src/components/PlayerGame.jsx
import { useEffect, useMemo, useState } from "react";
import { QUESTIONS } from "../data/questions";
import { supabase } from "../lib/supabaseClient";

export default function PlayerGame({ code, phase, currentQuestionNumber }) {
  const [localAnswer, setLocalAnswer] = useState("");
  const [hasStealTurn, setHasStealTurn] = useState(false);
  const [didISendSteal, setDidISendSteal] = useState(false);
  const [didIWinSteal, setDidIWinSteal] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const qNumber = Number(currentQuestionNumber || 0);
  const question = QUESTIONS[qNumber];
  const options = question?.options;

  // Texto general según fase
  const phaseLabel = useMemo(() => {
    if (!qNumber) return "Esperando a que el host elija una pregunta…";
    if (phase === "playing") return "Pregunta en juego";
    if (phase === "steal") return "Pregunta disponible para robar";
    if (phase === "resolved_host_correct") return "El host respondió correctamente";
    if (phase === "resolved_steal_correct") return "¡Alguien robó la pregunta y acertó!";
    if (phase === "resolved_all_wrong") return "Nadie acertó esta pregunta";
    if (phase === "ended") return "La sesión ha terminado";
    return "Esperando indicaciones del host…";
  }, [phase, qNumber]);

  // Reset de estados locales cuando el host pasa a nueva pregunta
  useEffect(() => {
    if (phase === "playing" && !qNumber) {
      setLocalAnswer("");
      setHasStealTurn(false);
      setDidISendSteal(false);
      setDidIWinSteal(false);
      setIsSending(false);
    }
  }, [phase, qNumber]);

  const handleChoiceClick = (letter) => {
    setLocalAnswer(letter);
  };

  // ---- Enviar respuesta de ROBO con control de "solo uno gana" ----
  const handleSendStealAnswer = async () => {
    if (!qNumber || !question) return;

    const user = (localAnswer || "").trim().toLowerCase();
    if (!user) {
      alert("Elige una opción antes de enviar 🙂");
      return;
    }

    const correctLetter = String(question.correct || "").trim().toLowerCase();
    const isCorrect = user === correctLetter;

    setIsSending(true);
    setDidISendSteal(true);

    try {
      if (isCorrect) {
        // Intentar ser el PRIMERO que cambia la fase a "resolved_steal_correct"
        const { data, error } = await supabase
          .from("sessions")
          .update({ phase: "resolved_steal_correct" })
          .eq("code", code)
          .eq("phase", "steal") // solo si sigue en modo robo
          .select();

        if (error) {
          console.error("Error en update de robo correcto:", error);
          setDidIWinSteal(false);
          return;
        }

        if (data && data.length > 0) {
          // 🎉 Yo fui el primero → GANÉ el robo
          setDidIWinSteal(true);
        } else {
          // Otro jugador ya había cambiado la fase antes que yo
          setDidIWinSteal(false);
        }
      } else {
        // Respuesta incorrecta
        const { data, error } = await supabase
          .from("sessions")
          .update({ phase: "resolved_all_wrong" })
          .eq("code", code)
          .eq("phase", "steal") // solo si aún estamos en robo
          .select();

        if (error) {
          console.error("Error en update de robo incorrecto:", error);
        }

        // En cualquier caso, si fue incorrecta, no gané el robo
        setDidIWinSteal(false);
      }
    } catch (err) {
      console.error("Error enviando respuesta de robo:", err);
      setDidISendSteal(false);
      setDidIWinSteal(false);
    } finally {
      setIsSending(false);
    }
  };

  const showOptions =
    qNumber &&
    (phase === "playing" ||
      phase === "steal" ||
      phase === "resolved_host_correct" ||
      phase === "resolved_steal_correct" ||
      phase === "resolved_all_wrong");

  // ---- Textos de pantallas finales según quién ganó ----
  let finalTitle = "";
  let finalDescription = "";

  if (qNumber && question) {
    if (phase === "resolved_host_correct") {
      finalTitle = "Respuesta correcta ✅";
      finalDescription = "El host respondió correctamente esta pregunta.";
    } else if (phase === "resolved_steal_correct") {
      if (didISendSteal && didIWinSteal) {
        // Yo mandé la respuesta y fui el primero → gané el robo
        finalTitle = "¡Te robaste la pregunta! 🎉";
        finalDescription =
          "Tu respuesta fue correcta y fuiste el primero en enviarla.";
      } else if (didISendSteal && !didIWinSteal) {
        // Yo intenté robar, pero otro se me adelantó
        finalTitle = "Otro jugador fue más rápido 😅";
        finalDescription =
          "Intentaste robar la pregunta, pero otro jugador la respondió antes.";
      } else {
        // Yo nunca mandé respuesta de robo
        finalTitle = "¡Pregunta robada correctamente! 🙌";
        finalDescription =
          "Otro jugador respondió correctamente y se robó la pregunta.";
      }
    } else if (phase === "resolved_all_wrong") {
      if (didISendSteal) {
        finalTitle = "Respuesta incorrecta 😕";
        finalDescription =
          "No lograste robar la pregunta. Nadie acertó esta vez.";
      } else {
        finalTitle = "Nadie acertó esta pregunta 😕";
        finalDescription =
          "Ni el host ni el jugador que intentó robar acertaron la respuesta.";
      }
    }
  }

  const disabledButtons =
    phase === "playing" ||
    phase === "resolved_host_correct" ||
    phase === "resolved_steal_correct" ||
    phase === "resolved_all_wrong" ||
    (phase === "steal" && (!hasStealTurn || didISendSteal));

  return (
    <div className="font-fredoka text-center">
      {/* ENCABEZADO */}
      <h2 className="text-2xl sm:text-3xl font-bold text-[#343434] mb-1">
        Código de juego
      </h2>

      <div className="inline-flex items-center justify-center rounded-3xl bg-[#FEF1E5] border border-[#FE6E16]/30 px-6 py-4 mb-4">
        <span className="text-xs font-semibold text-[#FE6E16] mr-2">
          CÓDIGO
        </span>
        <span className="text-3xl sm:text-4xl font-extrabold tracking-[0.25em] text-[#FE6E16]">
          {code}
        </span>
      </div>

      <p className="text-sm sm:text-base text-[#343434]/80 mb-1">
        {phaseLabel}
      </p>

      {qNumber ? (
        <p className="text-xs sm:text-sm text-[#343434]/60 mb-4">
          Pregunta <span className="font-semibold">{qNumber}</span>
        </p>
      ) : (
        <p className="text-xs sm:text-sm text-[#343434]/60 mb-4">
          Espera a que el host ponga un número de pregunta.
        </p>
      )}

      {/* Mensaje + botón para iniciar robo */}
      {phase === "steal" && qNumber && !hasStealTurn && !didISendSteal && (
        <div className="mb-4">
          <p className="text-xs sm:text-sm text-[#343434]/80 mb-2">
            El host respondió incorrectamente. ¿Quieres intentar robar la
            pregunta?
          </p>
          <button
            type="button"
            onClick={() => setHasStealTurn(true)}
            className="rounded-full bg-[#FF924D] px-6 py-2.5 text-sm sm:text-base font-semibold text-white shadow-md shadow-[#FF924D]/40 hover:-translate-y-0.5 hover:shadow-[#FF924D]/60 transition"
          >
            ¡Quiero robar!
          </button>
        </div>
      )}

      {phase === "steal" && hasStealTurn && !didISendSteal && (
        <p className="mb-2 text-xs sm:text-sm text-[#343434]/80">
          Te toca intentar robar esta pregunta. Elige tu opción y envíala:
        </p>
      )}

      {/* OPCIONES */}
      {showOptions && options && (
        <div className="mt-2 text-left">
          {phase === "playing" && (
            <p className="text-xs sm:text-sm text-[#343434]/80 mb-2">
              El host está respondiendo esta pregunta. Puedes ver las opciones.
            </p>
          )}

          {phase === "steal" && !hasStealTurn && !didISendSteal && (
            <p className="text-xs sm:text-sm text-[#343434]/80 mb-2">
              Si el host te da la palabra, toca “¡Quiero robar!” para intentar
              responder.
            </p>
          )}

          <div className="flex flex-col gap-2">
            {["a", "b", "c", "d"].map((letter) => {
              const text = options[letter];
              if (!text) return null;

              const isSelected =
                (localAnswer || "").toLowerCase() === letter.toLowerCase();

              return (
                <button
                  key={letter}
                  type="button"
                  onClick={() =>
                    !disabledButtons && handleChoiceClick(letter)
                  }
                  className={`w-full text-left rounded-2xl px-4 py-2.5 text-sm sm:text-base border transition ${
                    isSelected && !disabledButtons
                      ? "bg-[#FE6E16] text-white border-[#FE6E16] shadow-md"
                      : "bg-white text-[#343434] border-[#343434]/15 hover:bg-[#FBF7F1]"
                  }`}
                  disabled={disabledButtons}
                >
                  <span className="font-semibold mr-2">
                    {letter.toUpperCase()}.
                  </span>
                  <span>{text}</span>
                </button>
              );
            })}
          </div>

          {phase === "steal" && hasStealTurn && !didISendSteal && (
            <button
              type="button"
              onClick={handleSendStealAnswer}
              disabled={isSending}
              className="mt-3 w-full rounded-full bg-[#7DB647] px-4 py-2.5 text-sm sm:text-base font-semibold text-white shadow-md shadow-[#7DB647]/40 hover:-translate-y-0.5 hover:shadow-[#7DB647]/60 transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSending ? "Enviando..." : "Enviar respuesta"}
            </button>
          )}
        </div>
      )}

      {/* PANTALLAS FINALES */}
      {qNumber &&
        question &&
        (phase === "resolved_host_correct" ||
          phase === "resolved_steal_correct" ||
          phase === "resolved_all_wrong") && (
          <div className="mt-4 text-center bg-[#FEF1E5] border border-[#FE6E16]/30 rounded-3xl px-5 py-5 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-bold text-[#343434] mb-2">
              {finalTitle}
            </h3>
            <p className="text-sm sm:text-base text-[#343434]/80 mb-3">
              {finalDescription}
            </p>
            <p className="text-sm sm:text-base font-semibold text-[#343434] mb-1">
              Respuesta correcta:{" "}
              <span className="text-[#7DB647]">
                {question.correct.toUpperCase()}
              </span>
            </p>
            <p className="text-xs sm:text-sm text-[#343434]/80 leading-relaxed">
              {question.explanation}
            </p>
          </div>
        )}
    </div>
  );
}