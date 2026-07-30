import { FileSearch, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const EmptyState = () => {
  return (
    <div className="bg-white rounded-2xl border shadow-sm">

      <div className="flex flex-col items-center justify-center py-24 px-6">

        <div className="w-28 h-28 rounded-full bg-blue-50 flex items-center justify-center">

          <FileSearch
            size={56}
            className="text-blue-600"
          />

        </div>

        <h2 className="text-3xl font-bold text-gray-800 mt-8">

          No Applications Yet

        </h2>

        <p className="text-gray-500 text-center max-w-xl mt-4 leading-7">

          Once candidates start applying for your jobs,
          all applications will appear here. You can review,
          shortlist, reject, schedule interviews and hire
          candidates from this page.

        </p>

        <div className="flex flex-wrap gap-4 mt-10">

          <Link
            to="/recruiter/post-job"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition"
          >
            <Plus size={18} />
            Post New Job
          </Link>

          <Link
            to="/recruiter/manage-jobs"
            className="border border-gray-300 hover:bg-gray-100 px-6 py-3 rounded-xl transition"
          >
            Manage Jobs
          </Link>

        </div>

      </div>

    </div>
  );
};

export default EmptyState;