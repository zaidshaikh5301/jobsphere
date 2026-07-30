import { Search, Filter, RotateCcw } from "lucide-react";

const ApplicationFilters = ({
  search,
  setSearch,
  status,
  setStatus,
  job,
  setJob,
  jobs = [],
}) => {
  const clearFilters = () => {
    setSearch("");
    setStatus("All");
    setJob("All");
  };

  return (
    <div className="bg-white rounded-2xl border shadow-sm p-6">

      <div className="flex flex-col lg:flex-row gap-4">

        {/* Search */}

        <div className="relative flex-1">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search candidate, email or job..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>

        {/* Status Filter */}

        <div className="relative min-w-[200px]">

          <Filter
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full pl-11 pr-4 py-3 border rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="All">All Status</option>
            <option value="Pending">Pending</option>
            <option value="Shortlisted">Shortlisted</option>
            <option value="Interview">Interview</option>
            <option value="Hired">Hired</option>
            <option value="Rejected">Rejected</option>
          </select>

        </div>

        {/* Job Filter */}

        <div className="min-w-[220px]">

          <select
            value={job}
            onChange={(e) => setJob(e.target.value)}
            className="w-full px-4 py-3 border rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="All">All Jobs</option>

            {jobs.map((jobItem) => (
              <option
                key={jobItem.id}
                value={jobItem.title}
              >
                {jobItem.title}
              </option>
            ))}

          </select>

        </div>

        {/* Clear Filters */}

        <button
          onClick={clearFilters}
          className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 transition"
        >
          <RotateCcw size={18} />
          Clear
        </button>

      </div>

    </div>
  );
};

export default ApplicationFilters;