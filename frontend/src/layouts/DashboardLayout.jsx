import Sidebar from "../components/dashboard/Sidebar";

export default function DashboardLayout({
  children,
}) {
  return (
    <div className="flex bg-[#09090B] min-h-screen">

      <Sidebar />

      <div className="flex-1 overflow-hidden">

        <main
          className="
            h-screen
            overflow-y-auto
            px-10
            py-8
          "
        >
          {children}
        </main>

      </div>

    </div>
  );
}