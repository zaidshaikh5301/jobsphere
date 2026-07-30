import { Search, MapPin } from "lucide-react";

const JobSearch = ({
  search,
  setSearch,
 location,
  setLocation,
}) => {
  return (
    <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 rounded-3xl p-10 text-white mb-10 shadow-xl">

      <h1 className="text-5xl font-bold">
        Find Your Dream Job 🚀
      </h1>

      <p className="mt-3 text-blue-100 text-lg">
        Discover thousands of opportunities from top companies.
      </p>

      <div className="grid lg:grid-cols-3 gap-4 mt-8">

        <div className="bg-white rounded-xl flex items-center px-4">

          <Search className="text-gray-400" />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Job title or company..."
            className="w-full p-4 outline-none text-gray-700"
          />

        </div>

        <div className="bg-white rounded-xl flex items-center px-4">

          <MapPin className="text-gray-400" />

          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
            className="w-full p-4 outline-none text-gray-700"
          />

        </div>

        <button className="bg-white text-blue-700 rounded-xl font-semibold hover:scale-105 transition-all">
          Search Jobs
        </button>

      </div>

    </section>
  );
};

export default JobSearch;