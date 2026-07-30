import { Search } from "lucide-react";

function CompanySearch({ search, setSearch }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 mb-10">

      <div className="flex items-center border rounded-xl px-4 py-3">

        <Search
          className="text-gray-400 mr-3"
          size={22}
        />

        <input
          type="text"
          placeholder="Search companies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full outline-none"
        />

      </div>

    </div>
  );
}

export default CompanySearch;