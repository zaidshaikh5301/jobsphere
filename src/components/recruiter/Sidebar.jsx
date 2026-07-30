import { NavLink, Link } from "react-router-dom";
import {
  LayoutDashboard,
  Briefcase,
  PlusSquare,
  Users,
  User,
  Bell,
  Settings,
  Home,
  LogOut,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    icon: <LayoutDashboard size={20} />,
    path: "/recruiter/dashboard",
  },
  {
    title: "Manage Jobs",
    icon: <Briefcase size={20} />,
    path: "/recruiter/manage-jobs",
  },
  {
    title: "Post Job",
    icon: <PlusSquare size={20} />,
    path: "/recruiter/post-job",
  },
  {
    title: "Applications",
    icon: <Users size={20} />,
    path: "/recruiter/applications",
  },
  {
    title: "Notifications",
    icon: <Bell size={20} />,
    path: "/recruiter/notifications",
  },
  {
    title: "Profile",
    icon: <User size={20} />,
    path: "/recruiter/profile",
  },
  {
    title: "Settings",
    icon: <Settings size={20} />,
    path: "/recruiter/settings",
  },
];

const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 w-72 h-screen bg-slate-900 text-white flex flex-col z-50">

      {/* Logo */}

      <div className="p-6 border-b border-slate-700">
        <h1 className="text-2xl font-bold text-blue-400">
          JobSphere
        </h1>

        <p className="text-sm text-slate-400 mt-1">
          Recruiter Panel
        </p>
      </div>

      {/* Navigation */}

      <nav className="flex-1 p-4 space-y-2">

        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "hover:bg-slate-800 text-slate-300"
              }`
            }
          >
            {item.icon}
            <span>{item.title}</span>
          </NavLink>
        ))}

      </nav>

      {/* Bottom Buttons */}

      <div className="p-4 border-t border-slate-700 space-y-3">

        <Link
          to="/"
          className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-medium transition"
        >
          <Home size={18} />
          Back to Home
        </Link>

        <button className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 py-3 rounded-xl font-medium transition">
          <LogOut size={18} />
          Logout
        </button>

      </div>

    </aside>
  );
};

export default Sidebar;