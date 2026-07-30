import { Briefcase, Building2, Users, Globe } from "lucide-react";

const JobStats = ({ totalJobs }) => {
  const stats = [
    {
      icon: <Briefcase size={28} />,
      value: totalJobs,
      label: "Jobs",
    },
    {
      icon: <Building2 size={28} />,
      value: "150+",
      label: "Companies",
    },
    {
      icon: <Users size={28} />,
      value: "12K+",
      label: "Applicants",
    },
    {
      icon: <Globe size={28} />,
      value: "50+",
      label: "Cities",
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-8">

      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition-all"
        >

          <div className="text-blue-600 mb-3">
            {item.icon}
          </div>

          <h2 className="text-3xl font-bold">
            {item.value}
          </h2>

          <p className="text-gray-500 mt-2">
            {item.label}
          </p>

        </div>
      ))}

    </div>
  );
};

export default JobStats;