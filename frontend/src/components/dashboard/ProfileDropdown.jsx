import { User, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function ProfileDropdown({ open }) {
  const navigate = useNavigate();
  const { logout } = useAuth();

  if (!open) return null;

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div
      className="
        absolute
        right-0
        top-14
        w-64
        rounded-2xl
        bg-zinc-900
        border
        border-zinc-800
        shadow-2xl
        overflow-hidden
        z-50
      "
    >
      <div className="px-5 py-4 border-b border-zinc-800">
        <h3 className="text-white font-semibold">
          Account
        </h3>
      </div>

      <button
        onClick={() => navigate("/profile")}
        className="w-full flex items-center gap-3 px-5 py-4 text-white hover:bg-zinc-800 transition"
      >
        <User size={18} />
        My Profile
      </button>

      <button
        onClick={handleLogout}
        className="w-full flex items-center gap-3 px-5 py-4 text-red-400 hover:bg-red-600 hover:text-white transition"
      >
        <LogOut size={18} />
        Logout
      </button>
    </div>
  );
}