// src/components/QuestionForm.jsx
import { QUESTIONS } from "../data/questions";

export default function QuestionForm({
  questionNumber,
  answer,
  onChangeNumber,
  onChangeAnswer,
  onSubmit,
  attempt,
}) {
  const num = Number(questionNumber);
  const currentQuestion = Number.isFinite(num) ? QUESTIONS[num] : null;
  const options =
    currentQuestion && currentQuestion.options ? currentQuestion.options : null;

  const handleNumberChange = (e) => {
    const value = e.target.value;
    onChangeNumber(value);
    onChangeAnswer(""); // limpiar respuesta al cambiar de pregunta
  };

  const handleChoiceClick = (letter) => {
    onChangeAnswer(letter);
  };

  return (
    <>
      <header className="text-center mb-6 font-fredoka">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#343434] tracking-tight">
          ¿Qué número de pregunta tienes?
        </h1>
      </header>

      <form className="space-y-4 font-fredoka" onSubmit={onSubmit}>
        {/* NÚMERO DE PREGUNTA */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-[#343434]">
            Número de pregunta
          </label>
          <input
            type="number"
            min="1"
            max="80"
            className="no-zoom-input w-full rounded-full border border-[#343434]/10 bg-white px-4 py-2.5 text-base sm:text-lg shadow-sm outline-none transition focus:border-[#FE6E16] focus:ring-2 focus:ring-[#FE6E16]/20 text-[#343434] placeholder:text-[#B0B0B0]"
            value={questionNumber}
            onChange={handleNumberChange}
            required
            placeholder="Ej. 12"
          />
        </div>

        {/* RESPUESTA COMO LETRA */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-[#343434]">
            Escribe tu respuesta (A, B, C, D…)
          </label>
          <input
            type="text"
            maxLength={1}
            className="no-zoom-input w-full rounded-full border border-[#343434]/10 bg-white px-4 py-2.5 text-base sm:text-lg shadow-sm outline-none transition focus:border-[#FE6E16] focus:ring-2 focus:ring-[#FE6E16]/20 uppercase text-[#343434] placeholder:text-[#B0B0B0]"
            value={answer}
            onChange={(e) => onChangeAnswer(e.target.value)}
            required
            placeholder="Ej. C"
          />
        </div>

        {/* OPCIONES A–D DE ESA PREGUNTA (SI EXISTEN) */}
        {options && (
          <div className="space-y-2">
            <p className="text-xs sm:text-sm text-[#343434]/80">
              O elige una de las opciones:
            </p>
            <div className="mt-1 flex flex-col gap-2">
              {["a", "b", "c", "d"].map((letter) => {
                const text = options[letter];
                if (!text) return null;

                const isSelected =
                  (answer || "").toLowerCase() === letter.toLowerCase();

                return (
                  <button
                    key={letter}
                    type="button"
                    onClick={() => handleChoiceClick(letter)}
                    className={`w-full text-left rounded-2xl px-4 py-2.5 text-sm sm:text-base border transition ${
                      isSelected
                        ? "bg-[#FE6E16] text-white border-[#FE6E16] shadow-md"
                        : "bg-white text-[#343434] border-[#343434]/15 hover:bg-[#FBF7F1]"
                    }`}
                  >
                    <span className="font-semibold mr-2">
                      {letter.toUpperCase()}.
                    </span>
                    <span>{text}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* BOTÓN ENVIAR */}
        <button
          type="submit"
          className="mt-2 w-full rounded-full bg-[#7DB647] px-4 py-2.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-[#7DB647]/30 transition transform hover:-translate-y-0.5 hover:shadow-[#7DB647]/50 active:translate-y-0"
        >
          Enviar
        </button>
      </form>

      {/* TEXTO DE INTENTOS */}
      <p className="mt-4 text-center text-xs sm:text-sm text-[#343434]/70">
        Cada pregunta tiene hasta{" "}
        <span className="font-semibold text-[#FE6E16]">2 intentos</span> en el
        mismo turno.
      </p>

      {attempt === 1 && (
        <p className="mt-1 text-center text-xs sm:text-sm text-[#AB2C25] font-semibold">
          Te queda <span className="underline">1 intento</span> para esta
          pregunta.
        </p>
      )}
    </>
  );
}