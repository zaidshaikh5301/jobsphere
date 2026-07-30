import { Link, NavLink } from "react-router-dom";

function Navbar() {

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Jobs", path: "/jobs" },
    { name: "Companies", path: "/companies" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Applications", path: "/my-applications" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    {name: "Saved Jobs",path: "/saved-jobs"},
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">

      <div className="max-w-7xl mx-auto px-6">

        <div className="h-20 flex justify-between items-center">

          <Link
            to="/"
            className="text-3xl font-bold text-blue-600"
          >
            JobSphere
          </Link>

          <div className="hidden md:flex gap-8">

            {navLinks.map((item) => (

              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600 transition"
                }
              >
                {item.name}
              </NavLink>

            ))}

          </div>

          <div className="flex items-center gap-4">

            <Link
              to="/auth"
              className="bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-xl text-white font-medium"
            >
              Login / Register
            </Link>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Navbar;