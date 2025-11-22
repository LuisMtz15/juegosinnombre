// src/components/PlayerLobby.jsx

export default function PlayerLobby({ code }) {
  return (
    <div className="font-fredoka text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#343434] mb-2">
        ¡Te uniste al juego! 🙌
      </h2>
      <p className="text-sm sm:text-base text-[#343434]/80 mb-4">
        Espera a que el host inicie la partida.
      </p>

      <div className="inline-flex items-center justify-center rounded-3xl bg-[#FEF1E5] border border-[#FE6E16]/30 px-6 py-4 mb-4">
        <span className="text-xs font-semibold text-[#FE6E16] mr-2">
          CÓDIGO
        </span>
        <span className="text-3xl sm:text-4xl font-extrabold tracking-[0.25em] text-[#FE6E16]">
          {code}
        </span>
      </div>

      <p className="text-xs sm:text-sm text-[#343434]/60">
        Cuando el host comience, se mostrará la pregunta en la pantalla.
      </p>
    </div>
  );
}