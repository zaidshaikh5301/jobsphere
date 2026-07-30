import Marquee from "react-fast-marquee";
import companies from "../../constants/companies";


function Companies() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Top Companies Hiring
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {companies.map((company) => (
            <div
              key={company.id}
              className="bg-white rounded-2xl shadow-lg p-6 text-center"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="h-16 mx-auto object-contain"
              />

              <h3 className="mt-4 text-xl font-semibold">
                {company.name}
              </h3>

              <p className="text-gray-500 mt-2">
                {company.openJobs} Open Jobs
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Companies;