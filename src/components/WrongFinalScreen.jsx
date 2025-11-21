// src/components/WrongFinalScreen.jsx

export default function WrongFinalScreen({
  correctLetter,
  explanation,
  onRestart,
}) {
  return (
    <section className="text-center">
      <div className="mb-4 rounded-2xl bg-[#AB2C25] px-4 py-3 text-white">
        <h2 className="text-xl sm:text-2xl font-bold">
          La respuesta correcta era:
        </h2>
      </div>

      <p className="text-2xl font-extrabold text-[#AB2C25]">
        {correctLetter?.toUpperCase()}
      </p>

      <p className="mt-4 text-sm font-semibold text-[#343434]">
        ¿Por qué era esa?
      </p>
      <p className="mt-1 text-sm sm:text-base text-[#343434]/80 leading-relaxed">
        {explanation}
      </p>

      <div className="mt-6 flex justify-center">
        <button
          className="rounded-full bg-[#FE6E16] px-6 py-2.5 text-sm sm:text-base font-semibold text-white shadow-md shadow-[#FE6E16]/40 transition hover:-translate-y-0.5 hover:shadow-[#FE6E16]/60"
          onClick={onRestart}
        >
          Jugar otra vez
        </button>
      </div>
    </section>
  );
}