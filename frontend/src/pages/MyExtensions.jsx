import DashboardLayout from "../layouts/DashboardLayout";
import Navbar from "../components/dashboard/Navbar";

export default function MyExtensions() {
  return (
    <DashboardLayout>
      <Navbar />

      <div className="space-y-8">

        <div>
          <h1 className="text-3xl font-bold text-white">
            My Extensions
          </h1>

          <p className="text-zinc-400 mt-2">
            Manage all your generated Chrome extensions.
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-12 flex flex-col items-center justify-center">

          <h2 className="text-xl font-semibold text-white">
            No Extensions Yet
          </h2>

          <p className="text-zinc-400 mt-3 text-center max-w-md">
            Generate your first AI-powered Chrome Extension and it will appear here.
          </p>

        </div>

      </div>
    </DashboardLayout>
  );
}