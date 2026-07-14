import {
  LayoutDashboard,
  Sparkles,
  FolderOpen,
  User,
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
    title: "My Extensions",
    path: "/extensions",
    icon: FolderOpen,
  },
  {
    title: "Profile",
    path: "/profile",
    icon: User,
  },
];

export default dashboardMenu;