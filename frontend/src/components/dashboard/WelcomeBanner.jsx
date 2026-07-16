import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function WelcomeBanner() {
  return (
    <div
      className="
        bg-gradient-to-r
        from-violet-700
        to-indigo-700
        rounded-3xl
        p-6
        sm:p-8
        mb-8

        flex
        flex-col
        lg:flex-row

        items-start
        lg:items-center

        justify-between
        gap-6
      "
    >
      <div className="flex-1">
        <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
          Ready to build your next Extension?
        </h2>

        <p className="text-violet-100 mt-2 text-sm sm:text-base">
          Generate Manifest V3 Chrome Extensions using AI.
        </p>
      </div>

      <Link
        to="/generate"
        className="
          flex
          items-center
          justify-center
          gap-2

          w-full
          sm:w-auto

          bg-white
          text-violet-700

          px-6
          py-3

          rounded-xl
          font-semibold

          hover:scale-105
          transition
        "
      >
        <Sparkles size={20} />
        New Extension
      </Link>
    </div>
  );
}