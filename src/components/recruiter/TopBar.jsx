import { useMemo, useState } from "react";
import {
  Bell,
  MessageSquare,
  Search,
  Settings,
  ChevronDown,
  User,
  LogOut,
  Building2,
} from "lucide-react";

const TopBar = () => {
  const [open, setOpen] = useState(false);

  const greeting = useMemo(() => {
    const hour = new Date().getHours();

    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    return "Good Evening";
  }, []);

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200">

      <div className="px-8 py-5 flex items-center justify-between">

        {/* Left */}

        <div className="flex items-center gap-8">

          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {greeting}, Recruiter 👋
            </h1>

            <p className="text-gray-500 mt-1">
              {today}
            </p>
          </div>

          <div className="hidden lg:flex items-center bg-gray-100 rounded-xl px-4 w-96">

            <Search size={18} className="text-gray-400" />

            <input
              type="text"
              placeholder="Search jobs, candidates..."
              className="bg-transparent w-full p-3 outline-none"
            />

          </div>

        </div>

        {/* Right */}

        <div className="flex items-center gap-4">

          <button className="relative w-12 h-12 rounded-xl bg-gray-100 hover:bg-blue-50 flex items-center justify-center transition">
            <Bell size={20} />

            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              5
            </span>
          </button>

          <button className="relative w-12 h-12 rounded-xl bg-gray-100 hover:bg-blue-50 flex items-center justify-center transition">
            <MessageSquare size={20} />

            <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              3
            </span>
          </button>

          <button className="w-12 h-12 rounded-xl bg-gray-100 hover:bg-blue-50 flex items-center justify-center transition">
            <Settings size={20} />
          </button>

          <div className="relative">

            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-3 bg-white border rounded-xl px-3 py-2 hover:shadow-md transition"
            >

              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                R
              </div>

              <div className="text-left hidden md:block">

                <h3 className="font-semibold">
                  Recruiter
                </h3>

                <p className="text-sm text-gray-500">
                  Google Inc.
                </p>

              </div>

              <ChevronDown size={18} />

            </button>

            {open && (

              <div className="absolute right-0 mt-3 w-64 bg-white rounded-xl shadow-xl border overflow-hidden">

                <button className="w-full flex items-center gap-3 px-5 py-3 hover:bg-gray-100">
                  <User size={18} />
                  My Profile
                </button>

                <button className="w-full flex items-center gap-3 px-5 py-3 hover:bg-gray-100">
                  <Building2 size={18} />
                  Company Profile
                </button>

                <button className="w-full flex items-center gap-3 px-5 py-3 hover:bg-gray-100">
                  <Settings size={18} />
                  Settings
                </button>

                <hr />

                <button className="w-full flex items-center gap-3 px-5 py-3 text-red-600 hover:bg-red-50">
                  <LogOut size={18} />
                  Logout
                </button>

              </div>

            )}

          </div>

        </div>

      </div>

    </header>
  );
};

export default TopBar;