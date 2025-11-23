// src/components/HostLobby.jsx

export default function HostLobby({ code, connectedCount, onStartGame }) {
  return (
    <div className="font-fredoka text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#343434] mb-2">
        Eres el host
      </h2>
      <p className="text-sm sm:text-base text-[#343434]/80 mb-4">
        Comparte este código con tu grupo:
      </p>

      <div className="inline-flex items-center justify-center rounded-3xl bg-[#FEF1E5] border border-[#FE6E16]/30 px-6 py-4 mb-4">
        <span className="text-xs font-semibold text-[#FE6E16] mr-2">
          CÓDIGO
        </span>
        <span className="text-3xl sm:text-4xl font-extrabold tracking-[0.25em] text-[#FE6E16]">
          {code}
        </span>
      </div>

      <p className="text-sm sm:text-base text-[#343434]/80 mb-1">
        Dispositivos conectados:
      </p>
      <p className="text-2xl font-bold text-[#7DB647] mb-4">{connectedCount}</p>

      <p className="text-xs sm:text-sm text-[#343434]/60 mb-4">
        Pídeles que entren a esta página, pongan el código y esperen a que
        inicies el juego.
      </p>

      <button
        type="button"
        onClick={onStartGame}
        className="rounded-full bg-[#7DB647] px-6 py-2.5 text-sm sm:text-base font-semibold text-white shadow-md shadow-[#7DB647]/40 hover:-translate-y-0.5 hover:shadow-[#7DB647]/60 transition"
      >
        Iniciar juego
      </button>
    </div>
  );
}