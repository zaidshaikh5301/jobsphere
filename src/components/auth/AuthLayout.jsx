import { BriefcaseBusiness } from "lucide-react";

function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-6 py-10">

      <div className="max-w-7xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl grid lg:grid-cols-2">

        {/* Left Side */}

        <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white p-16">

          <div className="flex items-center gap-3">

            <BriefcaseBusiness size={42} />

            <h1 className="text-4xl font-bold">
              JobSphere
            </h1>

          </div>

          <h2 className="mt-12 text-5xl font-bold leading-tight">
            Find Your
            <br />
            Dream Career.
          </h2>

          <p className="mt-8 text-blue-100 leading-8 text-lg">

            Discover thousands of jobs from top companies,
            connect with recruiters, and build your future.

          </p>

          <div className="mt-14 bg-white/10 rounded-2xl p-8 backdrop-blur-sm">

            <h3 className="text-2xl font-semibold">
              Why JobSphere?
            </h3>

            <ul className="mt-6 space-y-4 text-blue-100">

              <li>✔ 5000+ Active Jobs</li>

              <li>✔ Verified Recruiters</li>

              <li>✔ Easy One-Click Apply</li>

              <li>✔ Track Applications</li>

            </ul>

          </div>

        </div>

        {/* Right */}

        <div className="flex items-center justify-center p-10">

          {children}

        </div>

      </div>

    </div>
  );
}

export default AuthLayout;