import { Link } from "react-router-dom";
import { Eye, CheckCircle2, XCircle } from "lucide-react";

const applications = [
  {
    id: 1,
    name: "Zaid Shaikh",
    role: "Frontend Developer",
    experience: "Fresher",
    status: "Pending",
  },
  {
    id: 2,
    name: "Rahul Patel",
    role: "React Developer",
    experience: "2 Years",
    status: "Shortlisted",
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "UI/UX Designer",
    experience: "3 Years",
    status: "Interview",
  },
  {
    id: 4,
    name: "Amit Verma",
    role: "Backend Developer",
    experience: "4 Years",
    status: "Rejected",
  },
];

const getStatusStyle = (status) => {
  switch (status) {
    case "Pending":
      return "bg-yellow-100 text-yellow-700";
    case "Shortlisted":
      return "bg-blue-100 text-blue-700";
    case "Interview":
      return "bg-purple-100 text-purple-700";
    case "Rejected":
      return "bg-red-100 text-red-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

const RecentApplications = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">

      <div className="flex justify-between items-center mb-6">

        <div>
          <h2 className="text-2xl font-bold">
            Recent Applications
          </h2>

          <p className="text-gray-500 mt-1">
            Latest candidates who applied.
          </p>
        </div>

        <Link
          to="/recruiter/applications"
          className="text-blue-600 hover:underline"
        >
          View All
        </Link>

      </div>

      <div className="space-y-4">

        {applications.map((candidate) => (

          <div
            key={candidate.id}
            className="border rounded-xl p-4 hover:bg-gray-50 transition"
          >

            <div className="flex justify-between items-start">

              <div>

                <h3 className="font-semibold text-lg">
                  {candidate.name}
                </h3>

                <p className="text-gray-500 text-sm mt-1">
                  {candidate.role}
                </p>

                <p className="text-gray-400 text-sm">
                  {candidate.experience}
                </p>

              </div>

              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusStyle(
                  candidate.status
                )}`}
              >
                {candidate.status}
              </span>

            </div>

            <div className="flex gap-3 mt-5">

              <Link
                to={`/recruiter/candidate/${candidate.id}`}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm"
              >
                <Eye size={16} />
                View
              </Link>

              <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg text-sm">
                <CheckCircle2 size={16} />
                Shortlist
              </button>

              <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg text-sm">
                <XCircle size={16} />
                Reject
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default RecentApplications;