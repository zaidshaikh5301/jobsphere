import RecruiterProfileHeader from "../../components/recruiter/profile/RecruiterProfileHeader";
import PersonalInfoCard from "../../components/recruiter/profile/PersonalInfoCard";
import AboutCard from "../../components/recruiter/profile/AboutCard";
import SocialCard from "../../components/recruiter/profile/SocialCard";

const RecruiterProfile = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <RecruiterProfileHeader />

      <PersonalInfoCard />

      <AboutCard />

      <SocialCard />
    </div>
  );
};

export default RecruiterProfile;