import { TrendingUp, Users, BriefcaseBusiness, UserCheck } from "lucide-react";

const stats = [
  {
    title: "Applications",
    value: 248,
    progress: 90,
    color: "bg-blue-600",
    icon: Users,
  },
  {
    title: "Jobs Filled",
    value: 18,
    progress: 70,
    color: "bg-green-600",
    icon: UserCheck,
  },
  {
    title: "Open Positions",
    value: 24,
    progress: 60,
    color: "bg-purple-600",
    icon: BriefcaseBusiness,
  },
];

const DashboardCharts = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-6">

      {/* Hiring Overview */}

      <div className="lg:col-span-2 bg-white rounded-2xl shadow-md border border-gray-100 p-6">

        <div className="flex justify-between items-center mb-8">

          <div>

            <h2 className="text-2xl font-bold">
              Hiring Overview
            </h2>

            <p className="text-gray-500 mt-1">
              Recruitment performance this month
            </p>

          </div>

          <TrendingUp className="text-green-600" size={28} />

        </div>

        <div className="space-y-6">

          {stats.map((item) => {

            const Icon = item.icon;

            return (

              <div key={item.title}>

                <div className="flex justify-between items-center mb-2">

                  <div className="flex items-center gap-3">

                    <div
                      className={`${item.color} text-white w-10 h-10 rounded-lg flex items-center justify-center`}
                    >
                      <Icon size={20} />
                    </div>

                    <div>

                      <h3 className="font-semibold">
                        {item.title}
                      </h3>

                      <p className="text-sm text-gray-500">
                        {item.value}
                      </p>

                    </div>

                  </div>

                  <span className="font-semibold">
                    {item.progress}%
                  </span>

                </div>

                <div className="w-full bg-gray-200 rounded-full h-3">

                  <div
                    className={`${item.color} h-3 rounded-full`}
                    style={{ width: `${item.progress}%` }}
                  />

                </div>

              </div>

            );

          })}

        </div>

      </div>

      {/* Monthly Summary */}

      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-lg text-white p-6">

        <h2 className="text-2xl font-bold">
          Monthly Summary
        </h2>

        <p className="opacity-80 mt-2">
          July 2026
        </p>

        <div className="space-y-5 mt-8">

          <div className="flex justify-between">
            <span>Total Jobs</span>
            <strong>24</strong>
          </div>

          <div className="flex justify-between">
            <span>Applications</span>
            <strong>248</strong>
          </div>

          <div className="flex justify-between">
            <span>Interviews</span>
            <strong>16</strong>
          </div>

          <div className="flex justify-between">
            <span>Hired</span>
            <strong>9</strong>
          </div>

        </div>

        <button className="mt-8 w-full bg-white text-blue-700 py-3 rounded-xl font-semibold hover:bg-gray-100">
          Download Report
        </button>

      </div>

    </div>
  );
};

export default DashboardCharts;