import { Bell } from "lucide-react";

export default function NotificationButton({
  count = 0,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className="
        relative
        flex
        items-center
        justify-center
        w-11
        h-11
        rounded-xl
        bg-zinc-900
        border
        border-zinc-800
        hover:border-violet-500
        hover:bg-zinc-800
        transition-all
        duration-200
      "
    >
      <Bell size={20} className="text-white" />

      {count > 0 && (
        <span
          className="
            absolute
            -top-1
            -right-1
            w-5
            h-5
            rounded-full
            bg-red-500
            text-white
            text-xs
            flex
            items-center
            justify-center
          "
        >
          {count}
        </span>
      )}
    </button>
  );
}