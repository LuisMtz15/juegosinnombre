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
  const currentQuestion = QUESTIONS[num];
  const options = currentQuestion?.options;

  const handleChoiceClick = (letter) => {
    onChangeAnswer(letter);
  };

  const handleNumberChange = (e) => {
    const value = e.target.value;
    onChangeNumber(value);
    // 👇 cada vez que cambias de número de pregunta, limpiamos la respuesta
    onChangeAnswer("");
  };

  return (
    <>
      <header className="text-center mb-6 font-fredoka">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#343434] tracking-tight">
          ¿Qué número de pregunta tienes?
        </h1>
      </header>

      <form className="space-y-4 font-fredoka" onSubmit={onSubmit}>
        {/* Número de pregunta */}
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
            onChange={handleNumberChange}
            required
            placeholder="Ej. 12"
          />
        </div>

        {/* Campo de respuesta (texto) */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-[#343434]">
            Escribe tu respuesta (A, B, C, D…)
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

        {/* Opciones reales de la pregunta (A, B, C, D) */}
        {options && (
          <div className="space-y-2">
            <p className="text-xs sm:text-sm text-[#343434]/80">
              O elige una de las opciones:
            </p>
            <div className="mt-1 flex flex-col gap-2">
              {["a", "b", "c", "d"].map((letter) => {
                const isSelected =
                  (answer || "").toLowerCase() === letter.toLowerCase();
                const text = options[letter];
                if (!text) return null;

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

        {/* Botón enviar */}
        <button
          type="submit"
          className="mt-2 w-full rounded-full bg-[#7DB647] px-4 py-2.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-[#7DB647]/30 transition transform hover:-translate-y-0.5 hover:shadow-[#7DB647]/50 active:translate-y-0"
        >
          Enviar
        </button>
      </form>

      {/* Mensaje de intentos */}
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