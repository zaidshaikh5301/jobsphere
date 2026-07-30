import { Link } from "react-router-dom";
import {
  Briefcase,
  Bookmark,
  User,
} from "lucide-react";

function QuickActions() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">

      <h2 className="text-2xl font-bold mb-6">
        Quick Actions
      </h2>

      <div className="space-y-4">

        <Link
          to="/jobs"
          className="flex items-center gap-3 p-4 rounded-xl bg-blue-50 hover:bg-blue-100 transition"
        >
          <Briefcase className="text-blue-600" />
          <span className="font-medium">Browse Jobs</span>
        </Link>

        <Link
          to="/my-applications"
          className="flex items-center gap-3 p-4 rounded-xl bg-green-50 hover:bg-green-100 transition"
        >
          <Bookmark className="text-green-600" />
          <span className="font-medium">My Applications</span>
        </Link>

        <Link
          to="/auth"
          className="flex items-center gap-3 p-4 rounded-xl bg-purple-50 hover:bg-purple-100 transition"
        >
          <User className="text-purple-600" />
          <span className="font-medium">Edit Profile</span>
        </Link>

      </div>

    </div>
  );
}

export default QuickActions;