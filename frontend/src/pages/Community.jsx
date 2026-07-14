import DashboardLayout from "../layouts/DashboardLayout";
import Navbar from "../components/dashboard/Navbar";

export default function Community() {
  return (
    <DashboardLayout>
      <Navbar />

      <div className="space-y-8">

        <div>
          <h1 className="text-3xl font-bold text-white">
            Community
          </h1>

          <p className="text-zinc-400 mt-2">
            Discover extensions shared by the PromptForge community.
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-12 flex items-center justify-center">

          <p className="text-zinc-400">
            Community extensions will appear here.
          </p>

        </div>

      </div>
    </DashboardLayout>
  );
}