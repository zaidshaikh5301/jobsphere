import RecruiterLayout from "../../layouts/RecruiterLayout";

import StatsCards from "../../components/recruiter/StatsCards";
import QuickActions from "../../components/recruiter/QuickActions";
import HiringPipeline from "../../components/recruiter/HiringPipeline";
import RecentApplications from "../../components/recruiter/RecentApplications";
import UpcomingInterviews from "../../components/recruiter/UpcomingInterviews";
import DashboardCharts from "../../components/recruiter/DashboardCharts";
import ActiveTimeline from "../../components/recruiter/ActiveTimeline";
import CompanyPerformance from "../../components/recruiter/CompanyPerformance";

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <StatsCards />
      <QuickActions />
      <HiringPipeline />

      <div className="grid xl:grid-cols-2 gap-8">
        <RecentApplications />
        <UpcomingInterviews />
      </div>

      <DashboardCharts />
      <ActiveTimeline />
      <CompanyPerformance />
    </div>
  );
};

export default Dashboard;