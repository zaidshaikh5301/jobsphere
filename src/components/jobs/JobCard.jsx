import { useState } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  BriefcaseBusiness,
  IndianRupee,
  Heart,
  ArrowRight,
} from "lucide-react";
import { toast } from "react-toastify";

import {
  isJobSaved,
  toggleSaveJob,
} from "../../utils/savedJobs";

function JobCard({ job }) {
  const [saved, setSaved] = useState(isJobSaved(job.id));

  const handleSave = () => {
    const status = toggleSaveJob(job.id);

    setSaved(status);

    if (status) {
      toast.success("❤️ Job saved successfully!");
    } else {
      toast.info("Job removed from saved jobs");
    }
  };

  return (
    <div className="group bg-white rounded-3xl border border-slate-200 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">

      {/* Header */}

      <div className="flex items-center justify-between p-6">

        <div className="flex items-center gap-4">

          <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center">
            {job.logo ? (
              <img
                src={job.logo}
                alt={job.company}
                className="w-10 h-10 object-contain"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                {job.company?.charAt(0).toUpperCase()}
              </div>
            )}
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900">
              {job.title}
            </h3>

            <p className="text-slate-500 mt-1">
              {job.company}
            </p>
          </div>

        </div>

        <button
          onClick={handleSave}
          className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 ${saved
            ? "bg-red-100"
            : "bg-slate-100 hover:bg-red-100"
            }`}
        >
          <Heart
            size={20}
            className={`transition-all duration-300 ${saved
              ? "fill-red-500 text-red-500"
              : "text-slate-500 hover:text-red-500"
              }`}
          />
        </button>

      </div>

      {/* Job Details */}

      <div className="px-6 space-y-3">

        <div className="flex items-center gap-2 text-slate-600">
          <MapPin size={18} className="text-blue-600" />
          <span>{job.location}</span>
        </div>

        <div className="flex items-center gap-2 text-slate-600">
          <BriefcaseBusiness size={18} className="text-green-600" />
          <span>{job.type}</span>
        </div>

        <div className="flex items-center gap-2 text-slate-600">
          <IndianRupee size={18} className="text-orange-500" />
          <span>{job.salary}</span>
        </div>

      </div>

      {/* Skills */}

      <div className="flex flex-wrap gap-2 px-6 mt-6">

        {job.skills.slice(0, 4).map((skill, index) => (
          <span
            key={index}
            className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
          >
            {skill}
          </span>
        ))}

      </div>

      {/* Footer */}

      <div className="border-t mt-8 px-6 py-5 flex justify-between items-center">

        <Link
          to={`/jobs/${job.id}`}
          className="font-semibold text-blue-600 hover:text-blue-700 transition-colors"
        >
          View Details →
        </Link>

        <Link
          to={`/apply/${job.id}`}
          className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition-all duration-300 hover:scale-105"
        >
          Apply Now

          <ArrowRight size={18} />
        </Link>

      </div>

    </div>
  );
}

export default JobCard;