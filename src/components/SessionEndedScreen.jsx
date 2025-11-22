// src/components/SessionEndedScreen.jsx
import React from "react";

export default function SessionEndedScreen({ onBackToHome }) {
  return (
    <div className="font-fredoka text-center space-y-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#343434]">
        La sesión ha terminado
      </h2>

      <p className="text-sm sm:text-base text-[#343434]/80">
        El host cerró este juego. Si quieren seguir jugando, pídele que genere
        un nuevo código.
      </p>

      <button
        type="button"
        onClick={onBackToHome}
        className="mt-2 w-full rounded-full bg-[#7DB647] px-4 py-2.5 text-sm sm:text-base font-semibold text-white shadow-md shadow-[#7DB647]/40 hover:-translate-y-0.5 hover:shadow-[#7DB647]/60 transition"
      >
        Volver a la pantalla inicial
      </button>
    </div>
  );
}