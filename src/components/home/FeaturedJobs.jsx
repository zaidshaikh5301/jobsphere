import { useJobs } from "../../context/JobContext";
import JobCard from "../jobs/JobCard";

const FeaturedJobs = () => {
  const { jobs } = useJobs();

  const featuredJobs = jobs.slice(0, 6);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Featured Jobs
          </h2>

          <p className="text-gray-600 mt-3">
            Discover the latest opportunities from top companies.
          </p>
        </div>

        {featuredJobs.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow p-12 text-center">
            <h3 className="text-2xl font-semibold mb-2">
              No Jobs Available
            </h3>

            <p className="text-gray-500">
              Recruiters haven't posted any jobs yet.
            </p>
          </div>
        )}

      </div>
    </section>
  );
};

export default FeaturedJobs;