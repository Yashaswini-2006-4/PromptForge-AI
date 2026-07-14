import { useState } from "react";

export default function PromptInput() {
  const [prompt, setPrompt] = useState("");
  const [model, setModel] = useState("gemini");

  const handleGenerate = () => {
    if (!prompt.trim()) {
      alert("Please enter a prompt.");
      return;
    }

    console.log({
      prompt,
      model,
    });

    // Gemini API will be connected in Part 3.
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

      <h2 className="text-2xl font-semibold text-white">
        Describe Your Extension
      </h2>

      <p className="text-zinc-400 mt-2">
        Example: Build a Chrome extension that summarizes YouTube videos using AI.
      </p>

      <textarea
        rows={10}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe your extension..."
        className="
          mt-6
          w-full
          resize-none
          rounded-2xl
          bg-zinc-950
          border
          border-zinc-800
          px-5
          py-4
          text-white
          placeholder:text-zinc-500
          outline-none
          focus:border-violet-500
          transition
        "
      />

      <div className="mt-6 flex flex-wrap items-center justify-between gap-5">

        <div className="flex items-center gap-3">

          <label className="text-zinc-300">
            AI Model
          </label>

          <select
            value={model}
            onChange={(e) => setModel(e.target.value)}
            className="
              bg-zinc-950
              border
              border-zinc-800
              rounded-xl
              px-4
              py-2
              text-white
              outline-none
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

        <button
          onClick={handleGenerate}
          className="
            px-8
            py-3
            rounded-xl
            bg-violet-600
            hover:bg-violet-500
            transition
            text-white
            font-semibold
          "
        >
          Generate Extension
        </button>

      </div>

    </div>
  );
}