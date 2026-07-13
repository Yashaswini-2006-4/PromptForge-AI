import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function Input({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <div className="space-y-2">
      <label className="text-sm text-gray-300">
        {label}
      </label>

      <div className="relative">
        <input
          name={name}
          type={isPassword ? (showPassword ? "text" : "password") : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="
            w-full
            rounded-xl
            bg-zinc-900/70
            border
            border-zinc-700
            px-4
            py-3
            text-white
            outline-none
            focus:border-violet-500
            transition
          "
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>
    </div>
  );
}