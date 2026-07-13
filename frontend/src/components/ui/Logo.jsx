import { Code2 } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div
        className="
          w-12
          h-12
          rounded-xl
          bg-violet-600
          flex
          items-center
          justify-center
        "
      >
        <Code2 className="text-white" />
      </div>

      <div>
        <h1 className="text-2xl font-bold text-white">
          PromptForge AI
        </h1>

        <p className="text-gray-400 text-sm">
          Build Chrome Extensions from Natural Language
        </p>
      </div>
    </div>
  );
}