import {
  Briefcase,
  Bookmark,
  CalendarDays,
  Eye,
} from "lucide-react";

import StatsCard from "./StatsCard";

function DashboardStats() {
  const stats = [
    {
      title: "Applied Jobs",
      value: 12,
      subtitle: "Applications Submitted",
      icon: Briefcase,
      color: "bg-blue-600",
    },
    {
      title: "Saved Jobs",
      value: 8,
      subtitle: "Jobs Saved",
      icon: Bookmark,
      color: "bg-emerald-600",
    },
    {
      title: "Interviews",
      value: 3,
      subtitle: "Upcoming Interviews",
      icon: CalendarDays,
      color: "bg-orange-500",
    },
    {
      title: "Profile Views",
      value: 57,
      subtitle: "Recruiters Viewed",
      icon: Eye,
      color: "bg-purple-600",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <StatsCard
          key={index}
          title={stat.title}
          value={stat.value}
          subtitle={stat.subtitle}
          icon={stat.icon}
          color={stat.color}
        />
      ))}
    </div>
  );
}

export default DashboardStats;