import {
  BriefcaseBusiness,
  Users,
  CalendarDays,
  UserCheck,
} from "lucide-react";

const activities = [
  {
    id: 1,
    title: "Frontend Developer job posted",
    description: "New job opening published successfully.",
    time: "10 mins ago",
    icon: BriefcaseBusiness,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    title: "Rahul Patel shortlisted",
    description: "Candidate moved to Interview stage.",
    time: "35 mins ago",
    icon: Users,
    color: "bg-green-100 text-green-600",
  },
  {
    id: 3,
    title: "Interview Scheduled",
    description: "Interview with Zaid Shaikh at 2:00 PM.",
    time: "2 hours ago",
    icon: CalendarDays,
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: 4,
    title: "Candidate Hired",
    description: "UI Designer position successfully filled.",
    time: "Yesterday",
    icon: UserCheck,
    color: "bg-orange-100 text-orange-600",
  },
];

const ActivityTimeline = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">

      <div className="flex justify-between items-center mb-8">

        <div>

          <h2 className="text-2xl font-bold">
            Recent Activity
          </h2>

          <p className="text-gray-500 mt-1">
            Latest recruiter actions
          </p>

        </div>

        <button className="text-blue-600 hover:underline">
          View All
        </button>

      </div>

      <div className="relative">

        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>

        <div className="space-y-8">

          {activities.map((activity) => {

            const Icon = activity.icon;

            return (

              <div
                key={activity.id}
                className="relative flex gap-5"
              >

                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${activity.color} relative z-10`}
                >
                  <Icon size={20} />
                </div>

                <div className="flex-1">

                  <div className="flex justify-between items-center">

                    <h3 className="font-semibold text-gray-800">
                      {activity.title}
                    </h3>

                    <span className="text-sm text-gray-400">
                      {activity.time}
                    </span>

                  </div>

                  <p className="text-gray-500 mt-2">
                    {activity.description}
                  </p>

                </div>

              </div>

            );

          })}

        </div>

      </div>

    </div>
  );
};

export default ActivityTimeline;