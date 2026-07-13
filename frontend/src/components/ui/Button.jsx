import { motion } from "framer-motion";

export default function Button({
  children,
  type = "button",
  onClick,
  disabled = false,
  className = "",
}) {
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        w-full
        rounded-xl
        bg-violet-600
        hover:bg-violet-700
        text-white
        font-semibold
        py-3
        transition
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
}