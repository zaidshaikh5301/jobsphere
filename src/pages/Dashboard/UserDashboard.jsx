import { useJobs } from "../../context/JobContext";
import { storage } from "../../utils/storage";

import {
  Briefcase,
  Heart,
  FileText,
  CalendarDays,
  ArrowRight,
} from "lucide-react";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import JobCard from "../../components/jobs/JobCard";

const UserDashboard = () => {
  const { jobs } = useJobs();

  const applications = storage.get("applications") || [];
  const savedJobs = storage.get("savedJobs") || [];

  const activeJobs = jobs.filter(
    (job) => job.status === "Active"
  );

  const latestJobs = activeJobs.slice(0, 4);

  const stats = [
    {
      title: "Active Jobs",
      value: activeJobs.length,
      icon: Briefcase,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Saved Jobs",
      value: savedJobs.length,
      icon: Heart,
      color: "bg-red-100 text-red-600",
    },
    {
      title: "Applications",
      value: applications.length,
      icon: FileText,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Interviews",
      value: 0,
      icon: CalendarDays,
      color: "bg-yellow-100 text-yellow-600",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-100">

        <div className="max-w-7xl mx-auto px-6 py-10">

          {/* Hero */}

          <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 rounded-3xl text-white p-10 shadow-xl">

            <h1 className="text-5xl font-bold">
              Welcome Back 👋
            </h1>

            <p className="mt-3 text-blue-100 text-lg">
              Track applications, save jobs and discover your next opportunity.
            </p>

          </div>

          {/* Stats */}

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mt-10">

            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow hover:shadow-xl transition p-6"
                >
                  <div className="flex justify-between items-center">

                    <div>

                      <p className="text-gray-500">
                        {item.title}
                      </p>

                      <h2 className="text-4xl font-bold mt-2">
                        {item.value}
                      </h2>

                    </div>

                    <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center ${item.color}`}
                    >
                      <Icon size={28} />
                    </div>

                  </div>
                </div>
              );
            })}

          </div>

          {/* Latest Jobs */}

          <div className="mt-14">

            <div className="flex justify-between items-center mb-8">

              <div>

                <h2 className="text-3xl font-bold">
                  Latest Opportunities
                </h2>

                <p className="text-gray-500">
                  Freshly posted recruiter jobs
                </p>

              </div>

              <a
                href="/jobs"
                className="flex items-center gap-2 text-blue-600 font-semibold"
              >
                View All

                <ArrowRight size={18} />

              </a>

            </div>

            {latestJobs.length > 0 ? (
              <div className="grid lg:grid-cols-2 gap-8">

                {latestJobs.map((job) => (
                  <JobCard
                    key={job.id}
                    job={job}
                  />
                ))}

              </div>
            ) : (
              <div className="bg-white rounded-2xl p-10 text-center shadow">

                <h3 className="text-2xl font-semibold">
                  No Jobs Available
                </h3>

                <p className="text-gray-500 mt-3">
                  Recruiters haven't posted any jobs yet.
                </p>

              </div>
            )}

          </div>

          {/* Bottom */}

          <div className="grid lg:grid-cols-2 gap-8 mt-14">

            {/* Applications */}

            <div className="bg-white rounded-2xl shadow p-8">

              <h2 className="text-2xl font-bold">
                Recent Applications
              </h2>

              <div className="mt-6 space-y-4">

                {applications.length === 0 ? (
                  <p className="text-gray-500">
                    You haven't applied for any jobs yet.
                  </p>
                ) : (
                  applications.slice(0, 5).map((app) => (
                    <div
                      key={app.id}
                      className="border rounded-xl p-4"
                    >
                      <h3 className="font-semibold">
                        {app.title}
                      </h3>

                      <p className="text-sm text-gray-500">
                        {app.company}
                      </p>
                    </div>
                  ))
                )}

              </div>

            </div>

            {/* Saved Jobs */}

            <div className="bg-white rounded-2xl shadow p-8">

              <h2 className="text-2xl font-bold">
                Saved Jobs
              </h2>

              <div className="mt-6 space-y-4">

                {savedJobs.length === 0 ? (
                  <p className="text-gray-500">
                    No saved jobs yet.
                  </p>
                ) : (
                  savedJobs.slice(0, 5).map((id) => {
                    const job = jobs.find((j) => j.id === id);

                    if (!job) return null;

                    return (
                      <div
                        key={id}
                        className="border rounded-xl p-4"
                      >
                        <h3 className="font-semibold">
                          {job.title}
                        </h3>

                        <p className="text-gray-500 text-sm">
                          {job.company}
                        </p>
                      </div>
                    );
                  })
                )}

              </div>

            </div>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
};

export default UserDashboard;