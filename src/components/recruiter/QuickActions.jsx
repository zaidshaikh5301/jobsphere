import { Link } from "react-router-dom";
import {
  Plus,
  BriefcaseBusiness,
  Users,
  CalendarDays,
  BarChart3,
  Building2,
} from "lucide-react";

const actions = [
  {
    title: "Post Job",
    desc: "Create a new job posting",
    icon: Plus,
    color: "bg-blue-100 text-blue-600",
    link: "/recruiter/post-job",
  },
  {
    title: "Manage Jobs",
    desc: "Edit or close job posts",
    icon: BriefcaseBusiness,
    color: "bg-green-100 text-green-600",
    link: "/recruiter/manage-jobs",
  },
  {
    title: "Applications",
    desc: "Review applicants",
    icon: Users,
    color: "bg-purple-100 text-purple-600",
    link: "/recruiter/applications",
  },
  {
    title: "Interviews",
    desc: "Manage interviews",
    icon: CalendarDays,
    color: "bg-orange-100 text-orange-600",
    link: "/recruiter/interviews",
  },
  {
    title: "Analytics",
    desc: "Hiring reports",
    icon: BarChart3,
    color: "bg-pink-100 text-pink-600",
    link: "/recruiter/analytics",
  },
  {
    title: "Company",
    desc: "Update profile",
    icon: Building2,
    color: "bg-indigo-100 text-indigo-600",
    link: "/recruiter/company-profile",
  },
];

const QuickActions = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">
          Quick Actions
        </h2>

        <Link
          to="/recruiter/post-job"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          + New Job
        </Link>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">

        {actions.map((action) => {

          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              to={action.link}
              className="border rounded-xl p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center ${action.color}`}
              >
                <Icon size={28} />
              </div>

              <h3 className="font-semibold text-lg mt-4">
                {action.title}
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                {action.desc}
              </p>
            </Link>
          );

        })}

      </div>

    </div>
  );
};

export default QuickActions;