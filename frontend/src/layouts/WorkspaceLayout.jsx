import Sidebar from "../components/dashboard/Sidebar";
import Navbar from "../components/dashboard/Navbar";

export default function WorkspaceLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-[#09090B]">

      <Sidebar />

      <div className="flex flex-1 flex-col">

        <Navbar />

        <main
          className="
            flex-1
            overflow-y-auto
            p-6
          "
        >
          {children}
        </main>

      </div>

    </div>
  );
}