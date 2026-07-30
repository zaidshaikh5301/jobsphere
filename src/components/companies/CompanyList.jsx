import CompanyCard from "./CompanyCard";

function CompanyList({ companies }) {
  if (companies.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow p-10 text-center">
        <h2 className="text-2xl font-bold">
          No Companies Found
        </h2>

        <p className="text-gray-500 mt-3">
          Try searching with another company name.
        </p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {companies.map((company) => (
        <CompanyCard
          key={company.id}
          company={company}
        />
      ))}
    </div>
  );
}

export default CompanyList;