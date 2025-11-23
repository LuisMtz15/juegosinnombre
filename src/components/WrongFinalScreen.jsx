// src/components/WrongFinalScreen.jsx
import React from "react";
import { motion } from "framer-motion";

export default function WrongFinalScreen({
  correctLetter,
  explanation,
  onRestart,
  resolvedBySteal = false,
}) {
  const title = resolvedBySteal
    ? "El robo falló"
    : "Nadie acertó esta pregunta";

  const description = resolvedBySteal
    ? "El jugador que intentó robar la pregunta tampoco la acertó."
    : "Todos fallaron o nadie intentó robar la pregunta.";

  return (
    <motion.div
      className="font-fredoka text-center space-y-4"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-[#AB2C25]">
        {title}
      </h2>

      <p className="text-sm sm:text-base text-[#343434]/80">{description}</p>

      <div className="bg-[#FCECEC] border border-[#AB2C25]/40 rounded-3xl px-5 py-3 mt-4 text-left">
        <p className="text-sm sm:text-base text-[#343434] leading-relaxed">
          <span className="font-semibold">Respuesta correcta:</span>{" "}
          <span className="text-[#7DB647]">{correctLetter.toUpperCase()}</span>
        </p>

        <p className="text-sm sm:text-base mt-2 text-[#343434]/80 leading-relaxed">
          {explanation}
        </p>
      </div>

      <button
        onClick={onRestart}
        className="mt-4 w-full rounded-full bg-[#7DB647] px-4 py-2.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-[#7DB647]/40 hover:-translate-y-0.5 transition"
      >
        Siguiente pregunta
      </button>
    </motion.div>
  );
}