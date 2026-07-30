import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import JobCard from "../../components/jobs/JobCard";

import jobs from "../../constants/Jobs";
import { getSavedJobs } from "../../utils/savedJobs";

function SavedJobs() {
  const savedJobIds = getSavedJobs();

  const savedJobs = jobs.filter((job) =>
    savedJobIds.includes(job.id)
  );

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-12">

            <h1 className="text-5xl font-bold">
              Saved Jobs
            </h1>

            <p className="text-gray-600 mt-3">
              Your favourite opportunities in one place.
            </p>

          </div>

          {savedJobs.length === 0 ? (
            <div className="bg-white rounded-3xl shadow-lg p-20 text-center">

              <h2 className="text-3xl font-bold">
                No Saved Jobs
              </h2>

              <p className="text-gray-500 mt-4">
                Start saving jobs to view them here.
              </p>

            </div>
          ) : (
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

              {savedJobs.map((job) => (
                <JobCard
                  key={job.id}
                  job={job}
                />
              ))}

            </div>
          )}

        </div>
      </section>

      <Footer />
    </>
  );
}

export default SavedJobs;