import {
  Globe,
  Link,
  Briefcase,
  User,
} from "lucide-react";

import { useRecruiter } from "../../../context/RecruiterContext";

const SocialCard = () => {
  const { recruiter } = useRecruiter();

  const socialLinks = [
    {
      title: "Portfolio",
      value: recruiter?.portfolio,
      icon: <Globe size={20} />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "LinkedIn",
      value: recruiter?.linkedin,
      icon: <Link size={20} />,
      color: "bg-sky-100 text-sky-600",
    },
    {
      title: "GitHub",
      value: recruiter?.github,
      icon: <Briefcase size={20} />,
      color: "bg-gray-200 text-gray-700",
    },
    {
      title: "Twitter",
      value: recruiter?.twitter,
      icon: <User size={20} />,
      color: "bg-cyan-100 text-cyan-600",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6">
        Social Profiles
      </h2>

      <div className="space-y-4">
        {socialLinks.map((item) => (
          <div
            key={item.title}
            className="flex items-center gap-4 p-3 rounded-xl border hover:bg-gray-50 transition"
          >
            <div
              className={`w-11 h-11 rounded-full flex items-center justify-center ${item.color}`}
            >
              {item.icon}
            </div>

            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">
                {item.title}
              </h3>

              {item.value ? (
                <a
                  href={item.value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 text-sm break-all hover:underline"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-sm text-gray-400">
                  Not Added
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialCard;