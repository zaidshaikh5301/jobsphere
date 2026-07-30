import { Link } from "react-router-dom";
import { MapPin, Users, Briefcase, Globe } from "lucide-react";

function CompanyCard({ company }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-200 p-6">

      {/* Company Logo */}
      <div className="flex justify-center mb-5">
        <img
          src={company.logo}
          alt={company.name}
          className="w-20 h-20 object-contain rounded-xl border p-3 bg-white"
        />
      </div>

      {/* Company Name */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-slate-900">
          {company.name}
        </h2>

        <p className="text-blue-600 mt-1 font-medium">
          {company.industry}
        </p>
      </div>

      {/* Company Info */}
      <div className="mt-6 space-y-4 text-gray-600">

        <div className="flex items-center gap-3">
          <MapPin size={18} className="text-blue-600" />
          <span>{company.location}</span>
        </div>

        <div className="flex items-center gap-3">
          <Users size={18} className="text-blue-600" />
          <span>{company.employees}</span>
        </div>

        <div className="flex items-center gap-3">
          <Briefcase size={18} className="text-blue-600" />
          <span>{company.openJobs} Open Jobs</span>
        </div>

        <div className="flex items-center gap-3">
          <Globe size={18} className="text-blue-600" />
          <a
            href={company.website}
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600 transition"
          >
            Visit Website
          </a>
        </div>

      </div>

      {/* Description */}
      <p className="text-gray-500 mt-6 text-sm leading-6">
        {company.description}
      </p>

      {/* Button */}
      <div className="mt-8">
        <Link to="/jobs">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition">
            View Jobs
          </button>
        </Link>
      </div>

    </div>
  );
}

export default CompanyCard;