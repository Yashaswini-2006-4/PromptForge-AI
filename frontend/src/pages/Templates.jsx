import DashboardLayout from "../layouts/DashboardLayout";
import Navbar from "../components/dashboard/Navbar";

export default function Templates() {
  return (
    <DashboardLayout>
      <Navbar />

      <div className="space-y-8">

        <div>
          <h1 className="text-3xl font-bold text-white">
            Templates
          </h1>

          <p className="text-zinc-400 mt-2">
            Start faster using professionally designed extension templates.
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-12 flex items-center justify-center">

          <p className="text-zinc-400">
            Templates will appear here.
          </p>

        </div>

      </div>
    </DashboardLayout>
  );
}