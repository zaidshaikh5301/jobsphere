import {
  Users,
  Clock3,
  CalendarDays,
  CheckCircle2,
} from "lucide-react";

import { useApplications } from "../../../context/ApplicationContext";

const ApplicationStats = () => {
  const {
    totalApplications,
    pendingApplications,
    interviewApplications,
    hiredApplications,
  } = useApplications();

  const stats = [
    {
      title: "Total Applications",
      value: totalApplications,
      icon: Users,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Pending Review",
      value: pendingApplications,
      icon: Clock3,
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      title: "Interviews",
      value: interviewApplications,
      icon: CalendarDays,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Hired",
      value: hiredApplications,
      icon: CheckCircle2,
      color: "bg-green-100 text-green-600",
    },
  ];

  return (
    <div>
      <div className="mb-6">

        <h1 className="text-3xl font-bold text-gray-800">
          Applications
        </h1>

        <p className="text-gray-500 mt-2">
          Review and manage candidate applications.
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="bg-white rounded-2xl border shadow-sm p-6 hover:shadow-md transition"
            >
              <div className="flex justify-between items-center">

                <div>

                  <p className="text-sm text-gray-500">
                    {item.title}
                  </p>

                  <h2 className="text-3xl font-bold mt-2">
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
    </div>
  );
};

export default ApplicationStats;