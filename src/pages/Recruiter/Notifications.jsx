import RecruiterLayout from "../../layouts/RecruiterLayout";
import {
  Bell,
  Briefcase,
  UserPlus,
  CalendarDays,
  AlertCircle,
  CheckCircle,
  Clock,
} from "lucide-react";

const notifications = [
  {
    id: 1,
    title: "New Application",
    message: "Zaid Shaikh applied for Frontend Developer.",
    time: "2 minutes ago",
    type: "application",
    unread: true,
  },
  {
    id: 2,
    title: "Interview Scheduled",
    message: "Interview scheduled with Rahul Patel.",
    time: "1 hour ago",
    type: "interview",
    unread: true,
  },
  {
    id: 3,
    title: "Job Expiring Soon",
    message: "React Developer job expires tomorrow.",
    time: "5 hours ago",
    type: "warning",
    unread: false,
  },
  {
    id: 4,
    title: "Candidate Shortlisted",
    message: "Priya Sharma has been shortlisted.",
    time: "Yesterday",
    type: "success",
    unread: false,
  },
  {
    id: 5,
    title: "New Job Posted",
    message: "Backend Developer job has been published.",
    time: "2 days ago",
    type: "job",
    unread: false,
  },
];

const getIcon = (type) => {
  switch (type) {
    case "application":
      return <UserPlus className="text-blue-600" size={22} />;
    case "job":
      return <Briefcase className="text-indigo-600" size={22} />;
    case "interview":
      return <CalendarDays className="text-purple-600" size={22} />;
    case "warning":
      return <AlertCircle className="text-orange-600" size={22} />;
    case "success":
      return <CheckCircle className="text-green-600" size={22} />;
    default:
      return <Bell size={22} />;
  }
};

const Notifications = () => {
  return (
    <RecruiterLayout>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Notifications</h1>
          <p className="text-gray-500 mt-2">
            Stay updated with recent recruiter activities.
          </p>
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg">
          Mark all as read
        </button>
      </div>

      <div className="space-y-5">
        {notifications.map((item) => (
          <div
            key={item.id}
            className={`bg-white rounded-xl shadow-md p-5 border-l-4 transition hover:shadow-lg ${
              item.unread
                ? "border-blue-600"
                : "border-gray-200"
            }`}
          >
            <div className="flex justify-between items-start">
              <div className="flex gap-4">
                <div className="bg-gray-100 p-3 rounded-full">
                  {getIcon(item.type)}
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mt-1">
                    {item.message}
                  </p>

                  <div className="flex items-center gap-2 text-gray-400 text-sm mt-3">
                    <Clock size={14} />
                    {item.time}
                  </div>
                </div>
              </div>

              {item.unread && (
                <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">
                  New
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </RecruiterLayout>
  );
};

export default Notifications;