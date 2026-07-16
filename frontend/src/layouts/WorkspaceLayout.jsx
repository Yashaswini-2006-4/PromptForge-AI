import { useState } from "react";
import { Menu } from "lucide-react";

import Sidebar from "../components/dashboard/Sidebar";
import Navbar from "../components/dashboard/Navbar";

export default function WorkspaceLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#09090B]">

      {/* Overlay */}
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
      <div className="flex flex-1 flex-col">

        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between px-5 py-4 border-b border-zinc-800">
          <button onClick={() => setSidebarOpen(true)}>
            <Menu size={28} className="text-white" />
          </button>

          <h1 className="text-lg font-bold text-white">
            PromptForge AI
          </h1>

          <div className="w-7" />
        </div>

        <Navbar />

        <main
          className="
            flex-1
            overflow-y-auto
            px-4
            sm:px-6
            md:px-8
            lg:px-10
            py-6
          "
        >
          {children}
        </main>

      </div>

    </div>
  );
}