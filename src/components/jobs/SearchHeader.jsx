import { Search, MapPin, Briefcase } from "lucide-react";

function SearchHeader() {
  return (
    <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8">

      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-slate-900">
          Find Your Dream Job
        </h1>

        <p className="text-gray-500 mt-2">
          Search thousands of opportunities from top companies.
        </p>
      </div>

      <div className="grid lg:grid-cols-4 gap-4">

        {/* Job Search */}
        <div className="flex items-center border rounded-xl px-4 py-3">
          <Search className="text-gray-400 mr-3" size={20} />

          <input
            type="text"
            placeholder="Job title or keyword"
            className="w-full outline-none"
          />
        </div>

        {/* Location */}
        <div className="flex items-center border rounded-xl px-4 py-3">
          <MapPin className="text-gray-400 mr-3" size={20} />

          <input
            type="text"
            placeholder="Location"
            className="w-full outline-none"
          />
        </div>

        {/* Type */}
        <div className="flex items-center border rounded-xl px-4 py-3">
          <Briefcase className="text-gray-400 mr-3" size={20} />

          <select className="w-full outline-none bg-transparent">
            <option>All Types</option>
            <option>Full Time</option>
            <option>Part Time</option>
            <option>Internship</option>
            <option>Remote</option>
            <option>Hybrid</option>
          </select>
        </div>

        {/* Button */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition">
          Search Jobs
        </button>

      </div>

    </div>
  );
}

export default SearchHeader;