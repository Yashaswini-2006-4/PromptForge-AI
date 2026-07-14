export default function ModelSelector({
  value,
  onChange,
}) {
  return (
    <div className="flex items-center gap-3">
      <label className="text-zinc-300 font-medium">
        AI Model
      </label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          bg-zinc-950
          border
          border-zinc-800
          rounded-xl
          px-4
          py-2
          text-white
          outline-none
          focus:border-violet-500
          transition
        "
      >
        <option value="gemini">
          Gemini 2.5 Flash
        </option>

        <option value="groq">
          Groq Llama 3.3
        </option>
      </select>
    </div>
  );
}