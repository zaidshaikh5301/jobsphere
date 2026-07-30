const JobFilters = ({
  type,
  setType,
  clearFilters,
}) => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow sticky top-28">

      <h2 className="text-2xl font-bold mb-6">
        Filters
      </h2>

      <div className="space-y-6">

        <div>

          <h3 className="font-semibold mb-3">
            Job Type
          </h3>

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full border rounded-xl p-3"
          >
            <option value="">All</option>
            <option>Full Time</option>
            <option>Part Time</option>
            <option>Internship</option>
            <option>Contract</option>
          </select>

        </div>

        <button
          onClick={clearFilters}
          className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl"
        >
          Clear Filters
        </button>

      </div>

    </div>
  );
};

export default JobFilters;