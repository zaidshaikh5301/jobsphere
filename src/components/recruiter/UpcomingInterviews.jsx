import { CalendarDays, Clock, Video, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const interviews = [
  {
    id: 1,
    candidate: "Zaid Shaikh",
    position: "Frontend Developer",
    date: "Today",
    time: "10:30 AM",
    type: "Google Meet",
  },
  {
    id: 2,
    candidate: "Rahul Patel",
    position: "React Developer",
    date: "Tomorrow",
    time: "2:00 PM",
    type: "Zoom",
  },
  {
    id: 3,
    candidate: "Priya Sharma",
    position: "UI/UX Designer",
    date: "25 Jul",
    time: "11:00 AM",
    type: "Teams",
  },
];

const UpcomingInterviews = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">

      <div className="flex justify-between items-center mb-6">

        <div>
          <h2 className="text-2xl font-bold">
            Upcoming Interviews
          </h2>

          <p className="text-gray-500 text-sm mt-1">
            Scheduled interviews
          </p>
        </div>

        <Link
          to="/recruiter/interviews"
          className="text-blue-600 hover:underline"
        >
          View All
        </Link>

      </div>

      <div className="space-y-4">

        {interviews.map((item) => (

          <div
            key={item.id}
            className="border rounded-xl p-4 hover:bg-gray-50"
          >

            <h3 className="font-semibold">
              {item.candidate}
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              {item.position}
            </p>

            <div className="flex justify-between mt-4">

              <div className="space-y-2">

                <div className="flex items-center gap-2 text-sm">
                  <CalendarDays size={16} />
                  {item.date}
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <Clock size={16} />
                  {item.time}
                </div>

              </div>

              <div className="flex gap-2">

                <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
                  <Video size={18}/>
                </button>

                <button className="border p-2 rounded-lg hover:bg-gray-100">
                  <Eye size={18}/>
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default UpcomingInterviews;