import DashboardLayout from "../layouts/DashboardLayout";
import Navbar from "../components/dashboard/Navbar";

export default function Settings() {
  return (
    <DashboardLayout>
      <Navbar />

      <div className="bg-zinc-900 rounded-3xl border border-zinc-800 p-8">
        <h1 className="text-3xl font-bold text-white">
          Settings
        </h1>

        <p className="text-zinc-400 mt-2">
          Manage your account settings.
        </p>
      </div>
    </DashboardLayout>
  );
}