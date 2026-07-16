import { useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import { Menu } from "lucide-react";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#09090B]">

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed lg:static
          top-0 left-0
          h-full
          z-50
          transform
          transition-transform
          duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        <Sidebar closeSidebar={() => setSidebarOpen(false)} />
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">

        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between px-5 py-4 border-b border-zinc-800">
          <button onClick={() => setSidebarOpen(true)}>
            <Menu className="text-white" size={28} />
          </button>

          <h1 className="text-lg font-bold text-white">
            PromptForge AI
          </h1>

          <div className="w-7" />
        </div>

        <main
          className="
            min-h-screen
            overflow-y-auto
            px-4
            sm:px-6
            md:px-8
            lg:px-10
            py-6
            lg:py-8
          "
        >
          {children}
        </main>

      </div>

    </div>
  );
}