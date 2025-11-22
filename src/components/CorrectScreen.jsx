// src/components/CorrectScreen.jsx
import React from "react";
import { motion } from "framer-motion";

export default function CorrectScreen({
  questionNumber,
  userAnswer,
  explanation,
  onNext,
  resolvedBySteal = false,
}) {
  const title = resolvedBySteal
    ? "¡Te robaron la pregunta! 😮"
    : "¡Respuesta correcta! 🎉";

  const subtitle = resolvedBySteal
    ? "Otro jugador respondió correctamente."
    : "¡Bien hecho! Respondiste correctamente.";

  return (
    <div className="font-fredoka text-center">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="space-y-4"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-[#343434]">
          {title}
        </h2>

        <p className="text-sm sm:text-base text-[#343434]/80">
          {subtitle}
        </p>

        <div className="bg-[#E8F4E0] border border-[#7DB647]/50 rounded-3xl px-5 py-3 mt-4 text-left">
          <p className="text-sm sm:text-base text-[#343434] leading-relaxed">
            <span className="font-semibold">Explicación:</span> {explanation}
          </p>
        </div>

        <button
          onClick={onNext}
          className="mt-4 w-full rounded-full bg-[#7DB647] px-4 py-2.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-[#7DB647]/40 hover:-translate-y-0.5 transition"
        >
          Siguiente pregunta
        </button>
      </motion.div>
    </div>
  );
}