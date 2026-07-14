import {
  LayoutDashboard,
  Sparkles,
  FolderOpen,
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
    title: "My Extensions",
    path: "/extensions",
    icon: FolderOpen,
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