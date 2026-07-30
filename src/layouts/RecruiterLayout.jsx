import { Outlet } from "react-router-dom";
import Sidebar from "../components/recruiter/Sidebar";
import Topbar from "../components/recruiter/Navbar";

const RecruiterLayout = () => {
  return (
    <div className="min-h-screen bg-slate-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-72 min-h-screen flex flex-col">
        <Topbar />

        <main className="flex-1 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default RecruiterLayout;