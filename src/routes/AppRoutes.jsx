import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// ---------------- USER PAGES ----------------
import Home from "../pages/Home/Home";
import Jobs from "../pages/Jobs/Jobs";
import JobDetails from "../pages/JobDetails/JobDetails";
import Dashboard from "../pages/Dashboard/UserDashboard";
import Companies from "../pages/Companies/Companies";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import ApplyJob from "../pages/ApplyJob/ApplyJob";
import MyApplications from "../pages/MyApplications/MyApplications";
import SavedJobs from "../pages/SavedJobs/SavedJobs";
import Auth from "../pages/Auth/Auth";

// ---------------- RECRUITER ----------------
import RecruiterLayout from "../layouts/RecruiterLayout";
import RecruiterDashboard from "../pages/Recruiter/Dashboard";
import ManageJobs from "../pages/Recruiter/ManageJobs";
import PostJob from "../pages/Recruiter/PostJob";
import Applications from "../pages/Recruiter/Applications";
import CandidateProfile from "../pages/Recruiter/CandidateProfile";
import RecruiterProfile from "../pages/Recruiter/RecruiterProfile";
import Settings from "../pages/Recruiter/Settings";
import Notifications from "../pages/Recruiter/Notifications";
import EditJob from "../pages/Recruiter/EditJob";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ================= USER ROUTES ================= */}

        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/auth" element={<Auth />} />

        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:id" element={<JobDetails />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/apply/:id" element={<ApplyJob />} />

        <Route path="/my-applications" element={<MyApplications />} />

        <Route path="/saved-jobs" element={<SavedJobs />} />

        <Route path="/companies" element={<Companies />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        {/* ================= RECRUITER PANEL ================= */}

        <Route path="/recruiter" element={<RecruiterLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />

          <Route path="dashboard" element={<RecruiterDashboard />} />

          <Route path="manage-jobs" element={<ManageJobs />} />

          <Route path="post-job" element={<PostJob />} />

          <Route path="jobs/edit/:id" element={<EditJob />} />

          <Route path="applications" element={<Applications />} />

          <Route path="candidate/:id" element={<CandidateProfile />} />

          <Route path="profile" element={<RecruiterProfile />} />

          <Route path="notifications" element={<Notifications />} />

          <Route path="settings" element={<Settings />} />
        </Route>

        {/* ================= 404 ================= */}

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;