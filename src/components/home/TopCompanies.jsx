import companies from "../../constants/companies";
import CompanyCard from "./CompanyCard";
import { Building2 } from "lucide-react";

function TopCompanies() {
  return (
    <section className="py-20 bg-white">
      
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">

          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-6">
            <Building2 size={16} className="text-blue-600" />
            <span className="text-sm font-semibold text-blue-600">Top Employers</span>
          </div>

          <h2 className="text-5xl font-bold text-slate-900">
            Work with the <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">World's Leaders</span>
          </h2>

          <p className="text-slate-600 text-lg mt-4 max-w-2xl mx-auto">
            Get hired by Fortune 500 companies and startups that are changing the world.
          </p>

        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {companies.map((company) => (
            <CompanyCard
              key={company.id}
              company={company}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default TopCompanies;