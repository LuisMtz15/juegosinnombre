// src/components/CorrectScreen.jsx

export default function CorrectScreen({
  questionNumber,
  userAnswer,
  explanation,
  onNext,
}) {
  return (
    <section className="text-center">
      <div className="mb-4 rounded-2xl bg-[#68973B] px-4 py-3 text-white">
        <h2 className="text-xl sm:text-2xl font-bold">¡Así se juega!</h2>
      </div>

      <p className="mt-1 text-sm sm:text-base text-[#343434]">
        Pregunta {questionNumber}
      </p>
      <p className="mt-1 text-xs sm:text-sm text-[#343434]/70">
        Tu respuesta:{" "}
        <span className="font-semibold">
          {userAnswer?.toUpperCase()}
        </span>
      </p>

      <p className="mt-4 text-sm font-semibold text-[#343434]">
        ¿Por qué es correcta?
      </p>
      <p className="mt-1 text-sm sm:text-base text-[#343434]/80 leading-relaxed">
        {explanation}
      </p>

      <div className="mt-6 flex justify-center">
        <button
          className="rounded-full bg-[#7DB647] px-6 py-2.5 text-sm sm:text-base font-semibold text-white shadow-md shadow-[#7DB647]/40 transition hover:-translate-y-0.5 hover:shadow-[#7DB647]/60"
          onClick={onNext}
        >
          Siguiente pregunta
        </button>
      </div>
    </section>
  );
}