import {
  LayoutDashboard,
  Sparkles,
  LayoutTemplate,
  Users,
  User,
  Settings,
} from "lucide-react";

const dashboardMenu = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Generate",
    path: "/generate",
    icon: Sparkles,
  },
  {
    title: "Templates",
    path: "/templates",
    icon: LayoutTemplate,
  },
  {
    title: "Community",
    path: "/community",
    icon: Users,
  },
  {
    title: "Profile",
    path: "/profile",
    icon: User,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

export default dashboardMenu;