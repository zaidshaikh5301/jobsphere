import { useState } from "react";
import {
  Search,
  MapPin,
  BriefcaseBusiness,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";

function SearchBar() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");

  const handleSearch = () => {
    navigate(
      `/jobs?search=${encodeURIComponent(search)}&location=${encodeURIComponent(
        location
      )}&type=${encodeURIComponent(jobType)}`
    );
  };

  return (
    <div>

      <h2 className="text-3xl font-bold text-slate-900 mb-2">
        Find Your Next Opportunity
      </h2>

      <p className="text-slate-500 mb-8">
        Search thousands of verified jobs from top companies.
      </p>

      <div className="space-y-5">

        {/* Job Title */}

        <div className="relative">

          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600"
            size={20}
          />

          <input
            type="text"
            placeholder="Job title, skills or company"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
          />

        </div>

        {/* Location */}

        <div className="relative">

          <MapPin
            className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600"
            size={20}
          />

          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
          />

        </div>

        {/* Job Type */}

        <div className="relative">

          <BriefcaseBusiness
            className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600"
            size={20}
          />

          <select
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none appearance-none bg-white transition-all"
          >
            <option value="">Job Type</option>
            <option>Full Time</option>
            <option>Part Time</option>
            <option>Internship</option>
            <option>Remote</option>
            <option>Hybrid</option>
          </select>

        </div>

        {/* Search Button */}

        <Button
          size="lg"
          className="w-full justify-center"
          onClick={handleSearch}
        >
          <Search size={20} className="mr-2" />

          Search Jobs

        </Button>

      </div>

      {/* Quick Search Tags */}

      <div className="flex flex-wrap gap-3 mt-8">

        {[
          "React",
          "Frontend",
          "Remote",
          "Node.js",
          "UI/UX",
          "Python",
        ].map((tag) => (
          <button
            key={tag}
            onClick={() => setSearch(tag)}
            className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white transition-all duration-300 text-sm font-medium"
          >
            {tag}
          </button>
        ))}

      </div>

    </div>
  );
}

export default SearchBar;