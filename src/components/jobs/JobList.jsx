import JobCard from "./JobCard";

function JobList({ jobs }) {
  if (jobs.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow p-10 text-center">
        <h2 className="text-2xl font-bold">
          No Jobs Found
        </h2>

        <p className="text-gray-500 mt-2">
          Try changing your search or filters.
        </p>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      {jobs.map((job) => (
        <JobCard
          key={job.id}
          job={job}
        />
      ))}
    </div>
  );
}

export default JobList;