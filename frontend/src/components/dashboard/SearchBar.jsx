import { Search } from "lucide-react";

export default function SearchBar({
  value = "",
  onChange,
  placeholder = "Search extensions...",
}) {
  return (
    <div className="relative w-80">
      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
      />

      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
          w-full
          pl-11
          pr-4
          py-3
          rounded-xl
          bg-zinc-900
          border
          border-zinc-800
          text-white
          placeholder:text-zinc-500
          outline-none
          transition
          focus:border-violet-500
          focus:ring-2
          focus:ring-violet-500/20
        "
      />
    </div>
  );
}