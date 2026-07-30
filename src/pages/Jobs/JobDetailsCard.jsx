import {
  MapPin,
  BriefcaseBusiness,
  IndianRupee,
  Clock3,
  Building2,
} from "lucide-react";

const JobDetailsCard = ({ job }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">

      <div className="flex justify-between items-start flex-wrap gap-6">

        <div>

          <h1 className="text-4xl font-bold text-slate-900">
            {job.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 mt-6 text-slate-600">

            <div className="flex items-center gap-2">
              <Building2 size={20} />
              <span>{job.company}</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={20} />
              <span>{job.location}</span>
            </div>

            <div className="flex items-center gap-2">
              <BriefcaseBusiness size={20} />
              <span>{job.type}</span>
            </div>

            <div className="flex items-center gap-2">
              <IndianRupee size={20} />
              <span>{job.salary}</span>
            </div>

            <div className="flex items-center gap-2">
              <Clock3 size={20} />
              <span>{job.experience}</span>
            </div>

          </div>

        </div>

        <div className="flex flex-col items-end gap-3">

          <span
            className={`px-4 py-2 rounded-full text-sm font-semibold ${
              job.status === "Active"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {job.status}
          </span>

          <span className="text-sm text-gray-500">
            {job.workMode}
          </span>

        </div>

      </div>

      {job.skills?.length > 0 && (
        <div className="mt-8">

          <h3 className="font-semibold text-lg mb-4">
            Skills Required
          </h3>

          <div className="flex flex-wrap gap-3">
            {job.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>

        </div>
      )}

    </div>
  );
};

export default JobDetailsCard;