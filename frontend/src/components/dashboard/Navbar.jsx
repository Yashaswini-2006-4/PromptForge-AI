import SearchBar from "./SearchBar";
import useAuth from "../../hooks/useAuth";

export default function Navbar() {
  const { user } = useAuth();

  return (
    <header className="flex items-center justify-between mb-8">
      {/* Left */}
      <div>
        <h1 className="text-3xl font-bold text-white">
          Dashboard
        </h1>

        <p className="text-zinc-400 mt-1">
          Welcome back, {user?.fullName} 👋
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-5">

        <SearchBar />

        <button
          className="
            w-11
            h-11
            rounded-xl
            bg-zinc-900
            border
            border-zinc-800
            hover:border-violet-500
            transition
          "
        >
          🔔
        </button>

        <div
          className="
            w-11
            h-11
            rounded-full
            bg-violet-600
            flex
            items-center
            justify-center
            text-white
            font-semibold
            text-lg
          "
        >
          {user?.fullName?.charAt(0).toUpperCase()}
        </div>

      </div>
    </header>
  );
}