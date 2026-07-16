import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import Navbar from "../components/dashboard/Navbar";
import useAuth from "../hooks/useAuth";
import EditProfileModal from "../components/profile/EditProfileModal";

export default function Profile() {
  const { user } = useAuth();
  const [openModal, setOpenModal] = useState(false);

  return (
    <DashboardLayout>
      <Navbar />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Left Card */}

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-8 flex flex-col items-center">

          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-violet-600 flex items-center justify-center text-4xl sm:text-5xl font-bold text-white">
            {user?.fullName?.trim()?.charAt(0)?.toUpperCase() || "U"}
          </div>

          <h2 className="mt-6 text-xl sm:text-2xl font-bold text-white text-center">
            {user?.fullName}
          </h2>

          <p className="text-violet-400 mt-1 break-all">
            @{user?.username}
          </p>

          <p className="text-zinc-400 mt-4 text-center break-all">
            {user?.email}
          </p>

          <button
            onClick={() => setOpenModal(true)}
            className="mt-8 w-full py-3 rounded-xl bg-violet-600 hover:bg-violet-500 transition text-white font-semibold"
          >
            Edit Profile
          </button>

        </div>

        {/* Right Card */}

        <div className="lg:col-span-2 bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-8">

          <h2 className="text-xl sm:text-2xl font-bold text-white mb-8">
            Account Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <InfoCard
              title="Full Name"
              value={user?.fullName}
            />

            <InfoCard
              title="Username"
              value={user?.username}
            />

            <InfoCard
              title="Email"
              value={user?.email}
            />

            <InfoCard
              title="Role"
              value={user?.role}
            />

            <InfoCard
              title="Joined"
              value={
                user?.createdAt
                  ? new Date(user.createdAt).toLocaleDateString(
                      "en-US",
                      {
                        month: "long",
                        year: "numeric",
                      }
                    )
                  : "-"
              }
            />

          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-white mt-12 mb-6">
            Account Status
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <StatCard
              title="Role"
              value={user?.role || "User"}
            />

            <StatCard
              title="Status"
              value="Active"
            />

          </div>

        </div>

      </div>

      <EditProfileModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        user={user}
      />

    </DashboardLayout>
  );
}

function InfoCard({ title, value }) {
  return (
    <div className="bg-zinc-800 rounded-2xl p-5">

      <p className="text-zinc-400 text-sm">
        {title}
      </p>

      <p className="text-white font-semibold mt-2 break-all">
        {value}
      </p>

    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="bg-zinc-800 rounded-2xl p-6 text-center">

      <p className="text-3xl sm:text-4xl font-bold text-violet-400 break-all">
        {value}
      </p>

      <p className="text-zinc-400 mt-3">
        {title}
      </p>

    </div>
  );
}