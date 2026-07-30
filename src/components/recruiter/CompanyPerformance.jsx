import {
  Building2,
  BriefcaseBusiness,
  Users,
  Trophy,
  Timer,
  Target,
} from "lucide-react";

const cards = [
  {
    title: "Company Rating",
    value: "4.8 / 5",
    subtitle: "Based on employee reviews",
    icon: Trophy,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    title: "Hiring Success",
    value: "91%",
    subtitle: "Offer acceptance rate",
    icon: Target,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Avg Hiring Time",
    value: "18 Days",
    subtitle: "Average recruitment cycle",
    icon: Timer,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Open Positions",
    value: "24",
    subtitle: "Currently hiring",
    icon: BriefcaseBusiness,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Employees",
    value: "320+",
    subtitle: "Company workforce",
    icon: Users,
    color: "bg-pink-100 text-pink-600",
  },
  {
    title: "Company Profile",
    value: "95%",
    subtitle: "Profile completion",
    icon: Building2,
    color: "bg-indigo-100 text-indigo-600",
  },
];

const CompanyPerformance = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">

      <div className="flex justify-between items-center mb-8">

        <div>
          <h2 className="text-2xl font-bold">
            Company Performance
          </h2>

          <p className="text-gray-500 mt-1">
            Overall recruitment performance
          </p>
        </div>

        <button className="text-blue-600 hover:underline">
          View Details
        </button>

      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">

        {cards.map((card) => {

          const Icon = card.icon;

          return (

            <div
              key={card.title}
              className="border rounded-xl p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >

              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center ${card.color}`}
              >
                <Icon size={28} />
              </div>

              <h3 className="font-semibold text-lg mt-5">
                {card.title}
              </h3>

              <h2 className="text-3xl font-bold mt-2 text-gray-800">
                {card.value}
              </h2>

              <p className="text-gray-500 text-sm mt-2">
                {card.subtitle}
              </p>

            </div>

          );

        })}

      </div>

    </div>
  );
};

export default CompanyPerformance;