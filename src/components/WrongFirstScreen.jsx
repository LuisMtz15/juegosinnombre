// src/components/WrongFirstScreen.jsx

export default function WrongFirstScreen({
  questionNumber,
  userAnswer,
  onSteal,
  onSkip,
}) {
  return (
    <section className="text-center">
      <div className="mb-4 rounded-2xl bg-[#AB2C25] px-4 py-3 text-white">
        <h2 className="text-xl sm:text-2xl font-bold">Casi, pero no</h2>
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

      <p className="mt-3 text-xs sm:text-sm text-[#343434]/70">
        Ahora otra persona puede intentar responderla.
      </p>

      <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
        <button
          className="rounded-full bg-white px-5 py-2.5 text-sm sm:text-base font-semibold text-[#AB2C25] border border-[#AB2C25] shadow-sm hover:bg-[#AB2C25]/5"
          onClick={onSteal}
        >
          Robar pregunta
        </button>
        <button
          className="rounded-full bg-[#FF924D] px-5 py-2.5 text-sm sm:text-base font-semibold text-white shadow-md shadow-[#FF924D]/40 hover:-translate-y-0.5 hover:shadow-[#FF924D]/60 transition"
          onClick={onSkip}
        >
          Nadie quiere intentar
        </button>
      </div>
    </section>
  );
}