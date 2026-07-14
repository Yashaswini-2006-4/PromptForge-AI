import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";
import Navbar from "../components/dashboard/Navbar";
import WelcomeBanner from "../components/dashboard/WelcomeBanner";
import StatCard from "../components/dashboard/StatCard";

import { getDashboardStats } from "../services/dashboardService";

export default function Dashboard() {
  const [stats, setStats] = useState({
    extensions: 0,
    aiGenerations: 0,
    published: 0,
    downloads: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getDashboardStats();

        setStats(data.stats);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <DashboardLayout>
      <Navbar />

      <WelcomeBanner />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <StatCard
          title="Extensions"
          value={loading ? "..." : stats.extensions}
          color="text-violet-400"
        />

        <StatCard
          title="AI Generations"
          value={loading ? "..." : stats.aiGenerations}
          color="text-blue-400"
        />

        <StatCard
          title="Published"
          value={loading ? "..." : stats.published}
          color="text-green-400"
        />

        <StatCard
          title="Downloads"
          value={loading ? "..." : stats.downloads}
          color="text-orange-400"
        />

      </div>
    </DashboardLayout>
  );
}