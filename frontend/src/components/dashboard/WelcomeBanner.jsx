import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function WelcomeBanner() {
  return (
    <div className="bg-gradient-to-r from-violet-700 to-indigo-700 rounded-3xl p-8 mb-8 flex items-center justify-between">
      <div>
        <h2 className="text-3xl font-bold text-white">
          Ready to build your next Extension?
        </h2>

        <p className="text-violet-100 mt-2">
          Generate Manifest V3 Chrome Extensions using AI.
        </p>
      </div>

      <Link
        to="/generate"
        className="flex items-center gap-2 bg-white text-violet-700 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
      >
        <Sparkles size={20} />
        New Extension
      </Link>
    </div>
  );
}