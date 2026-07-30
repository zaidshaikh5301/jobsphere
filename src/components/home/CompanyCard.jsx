import { MapPin, Briefcase } from "lucide-react";

function CompanyCard({ company }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-xl hover:-translate-y-1 transition">

      <div className="flex items-center gap-4">

        <img
          src={company.logo}
          alt={company.name}
          className="w-14 h-14 rounded-xl object-contain border p-2"
        />

        <div>
          <h3 className="text-xl font-bold">
            {company.name}
          </h3>

          <p className="text-gray-500">
            Technology
          </p>
        </div>

      </div>

      <div className="mt-6 space-y-2">

        <div className="flex items-center gap-2 text-gray-600">
          <MapPin size={18} />
          {company.location}
        </div>

        <div className="flex items-center gap-2 text-gray-600">
          <Briefcase size={18} />
          {company.jobs} Open Positions
        </div>

      </div>

      <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition">
        View Company
      </button>

    </div>
  );
}

export default CompanyCard;