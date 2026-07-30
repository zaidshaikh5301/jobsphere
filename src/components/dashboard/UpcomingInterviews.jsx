import { Calendar, Clock, MapPin } from "lucide-react";

function UpcomingInterviews() {
  const interviews = [
    {
      company: "Google",
      role: "Frontend React Developer",
      date: "15 Jul 2026",
      time: "10:00 AM",
      mode: "Google Meet",
    },
    {
      company: "Microsoft",
      role: "Backend Developer",
      date: "18 Jul 2026",
      time: "2:30 PM",
      mode: "Microsoft Teams",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">

      <h2 className="text-2xl font-bold mb-6">
        Upcoming Interviews
      </h2>

      <div className="space-y-5">

        {interviews.map((item, index) => (
          <div
            key={index}
            className="border rounded-xl p-4 hover:border-blue-500 hover:shadow-md transition"
          >
            <h3 className="font-semibold text-lg">
              {item.company}
            </h3>

            <p className="text-gray-500 mb-3">
              {item.role}
            </p>

            <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
              <Calendar size={16} />
              {item.date}
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
              <Clock size={16} />
              {item.time}
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin size={16} />
              {item.mode}
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default UpcomingInterviews;