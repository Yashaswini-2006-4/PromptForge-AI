import { motion } from "framer-motion";
import Logo from "../components/ui/Logo";

export default function AuthLayout({
  title,
  subtitle,
  children,
}) {
  return (
    <div
      className="
        min-h-screen
        bg-gradient-to-br
        from-zinc-950
        via-slate-950
        to-violet-950
        flex
        items-center
        justify-center
        p-6
      "
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className="
          w-full
          max-w-md
          rounded-3xl
          border
          border-zinc-700
          bg-white/5
          backdrop-blur-xl
          p-8
          shadow-2xl
        "
      >
        <Logo />

        <div className="mt-8 mb-6">
          <h2 className="text-3xl font-bold text-white">
            {title}
          </h2>

          <p className="text-gray-400 mt-2">
            {subtitle}
          </p>
        </div>

        {children}
      </motion.div>
    </div>
  );
}