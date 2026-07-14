import { useState } from "react";
import SearchBar from "./SearchBar";
import NotificationButton from "./NotificationButton";
import NotificationPanel from "./NotificationPanel";
import ProfileDropdown from "./ProfileDropdown";
import useAuth from "../../hooks/useAuth";

export default function Navbar() {
  const { user } = useAuth();

  const [openNotifications, setOpenNotifications] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  // Temporary data (later from MongoDB)
  const notifications = [];

  return (
    <header className="flex items-center justify-between mb-8">
      {/* Left */}
      <div>
        <h1 className="text-3xl font-bold text-white">
          Dashboard
        </h1>

        <p className="text-zinc-400 mt-1">
          Welcome back, {user?.fullName || "User"} 👋
        </p>
      </div>

      {/* Right */}
      <div className="relative flex items-center gap-5">
        <SearchBar />

        {/* Notifications */}
        <div className="relative">
          <NotificationButton
            count={notifications.length}
            onClick={() => {
              setOpenNotifications(!openNotifications);
              setOpenProfile(false);
            }}
          />

          <NotificationPanel
            open={openNotifications}
            notifications={notifications}
          />
        </div>

        {/* Profile */}
        <div className="relative">
          <div
            onClick={() => {
              setOpenProfile(!openProfile);
              setOpenNotifications(false);
            }}
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
              cursor-pointer
              hover:scale-105
              transition
            "
          >
            {user?.fullName?.charAt(0).toUpperCase() || "U"}
          </div>

          <ProfileDropdown open={openProfile} />
        </div>
      </div>
    </header>
  );
}