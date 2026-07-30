const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    applicants: 24,
    status: "Active",
  },
  {
    id: 2,
    title: "React Developer",
    applicants: 18,
    status: "Active",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    applicants: 9,
    status: "Closed",
  },
];

const RecentJobs = () => {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-semibold mb-5">Recent Jobs</h2>

      <div className="space-y-4">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="flex justify-between items-center border-b pb-3"
          >
            <div>
              <h3 className="font-semibold">{job.title}</h3>
              <p className="text-sm text-gray-500">
                {job.applicants} Applicants
              </p>
            </div>

            <span
              className={`px-3 py-1 rounded-full text-sm ${
                job.status === "Active"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {job.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentJobs;