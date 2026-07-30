import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { toast } from "react-toastify";
import { Plus, Search, Pencil, Trash2, Power } from "lucide-react";
import { useJobs } from "../../context/JobContext";

const ManageJobs = () => {
  const { jobs, deleteJob, toggleJobStatus } = useJobs();

  const [search, setSearch] = useState("");

  const filteredJobs = useMemo(() => {
    const value = search.toLowerCase().trim();

    return jobs.filter((job) => {
      return (
        job.title?.toLowerCase().includes(value) ||
        job.company?.toLowerCase().includes(value) ||
        job.location?.toLowerCase().includes(value)
      );
    });
  }, [jobs, search]);

  const handleDelete = (id) => {
    if (!window.confirm("Are you sure you want to delete this job?")) return;

    deleteJob(id);
    toast.success("Job deleted successfully");
  };

  const handleStatus = (id) => {
    toggleJobStatus(id);
    toast.success("Job status updated");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Manage Jobs
          </h1>

          <p className="text-slate-500 mt-1">
            View, edit and manage all published jobs.
          </p>
        </div>

        <Link
          to="/recruiter/post-job"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-medium transition"
        >
          <Plus size={18} />
          Post New Job
        </Link>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          placeholder="Search jobs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="text-left px-6 py-4 font-semibold">Job</th>
                <th className="text-left px-6 py-4 font-semibold">Company</th>
                <th className="text-left px-6 py-4 font-semibold">Location</th>
                <th className="text-left px-6 py-4 font-semibold">Salary</th>
                <th className="text-left px-6 py-4 font-semibold">
                  Applicants
                </th>
                <th className="text-left px-6 py-4 font-semibold">Status</th>
                <th className="text-right px-6 py-4 font-semibold">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <tr
                    key={job.id}
                    className="hover:bg-slate-50 transition"
                  >
                    <td className="px-6 py-4">
                      <h3 className="font-semibold text-slate-800">
                        {job.title}
                      </h3>

                      <p className="text-xs text-slate-500 mt-1">
                        {job.type} • {job.workMode}
                      </p>
                    </td>

                    <td className="px-6 py-4">
                      {job.company}
                    </td>

                    <td className="px-6 py-4">
                      {job.location}
                    </td>

                    <td className="px-6 py-4">
                      {job.salary}
                    </td>

                    <td className="px-6 py-4">
                      {job.applicants?.length ?? 0}
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          job.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {job.status}
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex justify-end gap-2">

                        <Link
                          to={`/recruiter/jobs/edit/${job.id}`}
                          className="p-2 rounded-lg border hover:bg-slate-100"
                          title="Edit Job"
                        >
                          <Pencil size={16} />
                        </Link>

                        <button
                          onClick={() => handleStatus(job.id)}
                          className="p-2 rounded-lg border hover:bg-slate-100"
                          title={
                            job.status === "Active"
                              ? "Deactivate Job"
                              : "Activate Job"
                          }
                        >
                          <Power size={16} />
                        </button>

                        <button
                          onClick={() => handleDelete(job.id)}
                          className="p-2 rounded-lg border border-red-200 text-red-600 hover:bg-red-50"
                          title="Delete Job"
                        >
                          <Trash2 size={16} />
                        </button>

                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={7}
                    className="text-center py-16"
                  >
                    <div className="text-5xl mb-4">📄</div>

                    <h3 className="text-lg font-semibold text-slate-700">
                      No Jobs Found
                    </h3>

                    <p className="text-slate-500 mt-2">
                      Publish your first job to see it here.
                    </p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageJobs;