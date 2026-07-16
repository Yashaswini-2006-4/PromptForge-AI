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

  const notifications = [];

  return (
    <header className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">

      {/* Left */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white">
          Dashboard
        </h1>

        <p className="text-zinc-400 mt-1 text-sm sm:text-base">
          Welcome back, {user?.fullName || "User"} 👋
        </p>
      </div>

      {/* Right */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto">

        {/* Search */}
        <div className="flex-1">
          <SearchBar />
        </div>

        {/* Icons */}
        <div className="flex items-center justify-end gap-4">

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
      </div>
    </header>
  );
}