import {
  Eye,
  UserCheck,
  CheckCircle2,
  XCircle,
  Mail,
  Download,
  CalendarDays,
  Briefcase,
} from "lucide-react";

const statusStyles = {
  Pending: "bg-yellow-100 text-yellow-700",
  Shortlisted: "bg-blue-100 text-blue-700",
  Interview: "bg-purple-100 text-purple-700",
  Hired: "bg-green-100 text-green-700",
  Rejected: "bg-red-100 text-red-700",
};

const ApplicationsTable = ({
  applications,
  onView,
  shortlist,
  reject,
  hire,
}) => {
  return (
    <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">

      {/* Header */}

      <div className="flex items-center justify-between px-6 py-5 border-b">

        <div>

          <h2 className="text-xl font-bold">
            Candidate Applications
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Manage all applications in one place.
          </p>

        </div>

        <button className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
          Export
        </button>

      </div>

      {/* Table */}

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="bg-gray-50">

            <tr>

              <th className="text-left px-6 py-4 font-semibold">
                Candidate
              </th>

              <th className="text-left px-6 py-4 font-semibold">
                Job
              </th>

              <th className="text-center px-6 py-4 font-semibold">
                Experience
              </th>

              <th className="text-center px-6 py-4 font-semibold">
                Applied
              </th>

              <th className="text-center px-6 py-4 font-semibold">
                Status
              </th>

              <th className="text-center px-6 py-4 font-semibold">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {applications.map((app) => (

              <tr
                key={app.id}
                className="border-t hover:bg-gray-50 transition"
              >

                {/* Candidate */}

                <td className="px-6 py-4">

                  <div className="flex items-center gap-4">

                    <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">

                      {app.candidateName?.charAt(0)}

                    </div>

                    <div>

                      <h3 className="font-semibold">

                        {app.candidateName}

                      </h3>

                      <p className="text-sm text-gray-500">

                        {app.email}

                      </p>

                    </div>

                  </div>

                </td>

                {/* Job */}

                <td className="px-6 py-4">

                  <div className="flex items-center gap-2">

                    <Briefcase
                      size={16}
                      className="text-blue-600"
                    />

                    {app.jobTitle || "N/A"}

                  </div>

                </td>

                {/* Experience */}

                <td className="text-center">

                  {app.experience || "Fresher"}

                </td>

                {/* Applied */}

                <td className="text-center">

                  {app.appliedDate}

                </td>

                {/* Status */}

                <td className="text-center">

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      statusStyles[app.status] ||
                      "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {app.status}
                  </span>

                </td>

                {/* Actions */}

                <td>

                  <div className="flex justify-center gap-2">

                    <button
                      onClick={() => onView(app)}
                      className="p-2 rounded-lg hover:bg-blue-100 text-blue-600"
                      title="View Candidate"
                    >
                      <Eye size={18} />
                    </button>

                    <button
                      onClick={() => shortlist(app.id)}
                      className="p-2 rounded-lg hover:bg-green-100 text-green-600"
                      title="Shortlist"
                    >
                      <UserCheck size={18} />
                    </button>

                    <button
                      className="p-2 rounded-lg hover:bg-purple-100 text-purple-600"
                      title="Schedule Interview"
                    >
                      <CalendarDays size={18} />
                    </button>

                    <button
                      className="p-2 rounded-lg hover:bg-sky-100 text-sky-600"
                      title="Email"
                    >
                      <Mail size={18} />
                    </button>

                    <button
                      className="p-2 rounded-lg hover:bg-orange-100 text-orange-600"
                      title="Download Resume"
                    >
                      <Download size={18} />
                    </button>

                    <button
                      onClick={() => hire(app.id)}
                      className="p-2 rounded-lg hover:bg-emerald-100 text-emerald-600"
                      title="Hire"
                    >
                      <CheckCircle2 size={18} />
                    </button>

                    <button
                      onClick={() => reject(app.id)}
                      className="p-2 rounded-lg hover:bg-red-100 text-red-600"
                      title="Reject"
                    >
                      <XCircle size={18} />
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* Footer */}

      <div className="px-6 py-4 border-t bg-gray-50 flex justify-between items-center">

        <p className="text-sm text-gray-500">
          Showing{" "}
          <span className="font-semibold">
            {applications.length}
          </span>{" "}
          application(s)
        </p>

        <button className="text-blue-600 font-medium hover:underline">
          View All
        </button>

      </div>

    </div>
  );
};

export default ApplicationsTable;