import { NavLink } from "react-router-dom";
import dashboardMenu from "../../utils/dashboardMenu";
import Logo from "../ui/Logo";

export default function Sidebar() {
  return (
    <aside
      className="
        w-72
        h-screen
        bg-zinc-950
        border-r
        border-zinc-800
        flex
        flex-col
      "
    >
      <div className="p-6 border-b border-zinc-800">
        <Logo />
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {dashboardMenu.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `
                flex
                items-center
                gap-3
                px-4
                py-3
                rounded-xl
                transition

                ${
                  isActive
                    ? "bg-violet-600 text-white"
                    : "text-gray-400 hover:bg-zinc-900 hover:text-white"
                }
                `
              }
            >
              <Icon size={20} />

              <span>{item.title}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}