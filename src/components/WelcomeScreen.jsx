// src/components/WelcomeScreen.jsx
import { useState } from "react";

export default function WelcomeScreen({ onJoinAsPlayer, onCreateHost }) {
  const [codeInput, setCodeInput] = useState("");

  const handleJoinSubmit = (e) => {
    e.preventDefault();
    const trimmed = codeInput.trim().toUpperCase();
    if (!trimmed) return;
    onJoinAsPlayer(trimmed);
  };

  return (
    <div className="font-fredoka">
      <header className="text-center mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#343434]">
          ¡Bienvenid@ al juego!
        </h1>
        <p className="mt-2 text-sm sm:text-base text-[#343434]/80">
          Usa un código para unirte o crea un grupo como host.
        </p>
      </header>

      {/* Unirse con código */}
      <form
        onSubmit={handleJoinSubmit}
        className="space-y-3 bg-white/80 rounded-2xl border border-[#343434]/10 px-4 py-4 mb-4"
      >
        <label className="block text-sm font-medium text-[#343434]">
          Tienes un código:
        </label>
        <input
          type="text"
          className="no-zoom-input w-full rounded-full border border-[#343434]/10 bg-white px-4 py-2.5 text-base shadow-sm outline-none transition focus:border-[#FE6E16] focus:ring-2 focus:ring-[#FE6E16]/20 uppercase tracking-[0.2em]"
          value={codeInput}
          onChange={(e) => setCodeInput(e.target.value)}
          placeholder="Ej. 1234"
        />
        <button
          type="submit"
          className="w-full rounded-full bg-[#7DB647] px-4 py-2.5 text-sm sm:text-base font-semibold text-white shadow-md shadow-[#7DB647]/30 hover:-translate-y-0.5 hover:shadow-[#7DB647]/50 transition"
        >
          Unirme al juego
        </button>
      </form>

      {/* Crear host */}
      <div className="space-y-3 bg-white/80 rounded-2xl border border-[#343434]/10 px-4 py-4">
        <p className="text-sm sm:text-base text-[#343434] font-medium">
          ¿Quieres ser host de un grupo?
        </p>
        <button
          type="button"
          onClick={onCreateHost}
          className="w-full rounded-full bg-[#FE6E16] px-4 py-2.5 text-sm sm:text-base font-semibold text-white shadow-md shadow-[#FE6E16]/30 hover:-translate-y-0.5 hover:shadow-[#FE6E16]/50 transition"
        >
          Crear grupo como host
        </button>
      </div>
    </div>
  );
}