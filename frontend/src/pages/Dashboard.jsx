import DashboardLayout from "../layouts/DashboardLayout";
import Navbar from "../components/dashboard/Navbar";
import WelcomeBanner from "../components/dashboard/WelcomeBanner";
import StatCard from "../components/dashboard/StatCard";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <Navbar />

      <WelcomeBanner />

      <div className="grid grid-cols-4 gap-6">
        <StatCard
          title="Extensions"
          value="0"
          color="text-violet-400"
        />

        <StatCard
          title="AI Generations"
          value="0"
          color="text-blue-400"
        />

        <StatCard
          title="Published"
          value="0"
          color="text-green-400"
        />

        <StatCard
          title="Downloads"
          value="0"
          color="text-orange-400"
        />
      </div>
    </DashboardLayout>
  );
}