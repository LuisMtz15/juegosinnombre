// src/components/NotFoundScreen.jsx

export default function NotFoundScreen({ onBack }) {
  return (
    <section className="text-center">
      <h2 className="text-2xl font-bold text-[#343434]">
        Pregunta no encontrada
      </h2>
      <p className="mt-2 text-sm sm:text-base text-[#343434]/80">
        Ese número todavía no está registrado en el juego.
      </p>
      <p className="mt-1 text-xs sm:text-sm text-[#343434]/60">
        Revisa que sea un número entre 1 y 80.
      </p>

      <div className="mt-6 flex justify-center">
        <button
          className="rounded-full bg-[#FF924D] px-6 py-2.5 text-sm sm:text-base font-semibold text-white shadow-md shadow-[#FF924D]/40 transition hover:-translate-y-0.5 hover:shadow-[#FF924D]/60"
          onClick={onBack}
        >
          Intentar de nuevo
        </button>
      </div>
    </section>
  );
}