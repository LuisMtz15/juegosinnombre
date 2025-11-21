// src/components/QuestionForm.jsx

export default function QuestionForm({
  questionNumber,
  answer,
  onChangeNumber,
  onChangeAnswer,
  onSubmit,
}) {
  return (
    <>
      <header className="text-center mb-6 font-fredoka">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#343434] tracking-tight">
          ¿Qué número de pregunta tienes?
        </h1>
      </header>

      <form className="space-y-4 font-fredoka" onSubmit={onSubmit}>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-[#343434]">
            Número de pregunta
          </label>
          <input
            type="number"
            min="1"
            max="80"
            className="w-full rounded-full border border-[#343434]/10 bg-white px-4 py-2.5 text-sm sm:text-base shadow-sm outline-none transition focus:border-[#FE6E16] focus:ring-2 focus:ring-[#FE6E16]/20"
            value={questionNumber}
            onChange={(e) => onChangeNumber(e.target.value)}
            required
            placeholder="Ej. 12"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-[#343434]">
            Escribe tu respuesta (A, B, C, D, E…)
          </label>
          <input
            type="text"
            maxLength={1}
            className="w-full rounded-full border border-[#343434]/10 bg-white px-4 py-2.5 text-sm sm:text-base shadow-sm outline-none transition focus:border-[#FE6E16] focus:ring-2 focus:ring-[#FE6E16]/20 uppercase"
            value={answer}
            onChange={(e) => onChangeAnswer(e.target.value)}
            required
            placeholder="Ej. C"
          />
        </div>

        <button
          type="submit"
          className="mt-2 w-full rounded-full bg-[#7DB647] px-4 py-2.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-[#7DB647]/30 transition transform hover:-translate-y-0.5 hover:shadow-[#7DB647]/50 active:translate-y-0"
        >
          Enviar
        </button>
      </form>

      <p className="mt-4 text-center text-xs sm:text-sm text-[#343434]/70">
        La letra puede ir en mayúscula o minúscula. Cada pregunta tiene hasta{" "}
        <span className="font-semibold text-[#FE6E16]">2 intentos</span> en el
        mismo turno.
      </p>
    </>
  );
}