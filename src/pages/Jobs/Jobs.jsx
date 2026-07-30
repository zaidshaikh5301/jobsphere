import { useState } from "react";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

import JobSearch from "../../components/jobs/JobSearch";
import JobFilters from "../../components/jobs/JobFilters";
import JobStats from "../../components/jobs/JobStats";
import JobCard from "../../components/jobs/JobCard";

import { useJobs } from "../../context/JobContext";

const Jobs = () => {
  const { jobs } = useJobs();

  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title?.toLowerCase().includes(search.toLowerCase()) ||
      job.company?.toLowerCase().includes(search.toLowerCase());

    const matchesLocation = location
      ? job.location?.toLowerCase().includes(location.toLowerCase())
      : true;

    const matchesType = type ? job.type === type : true;

    return matchesSearch && matchesLocation && matchesType;
  });

  return (
    <>
      <Navbar />

      <div className="bg-slate-100 min-h-screen">

        <div className="max-w-7xl mx-auto px-6 py-10">

          <JobSearch
            search={search}
            setSearch={setSearch}
            location={location}
            setLocation={setLocation}
          />

          <JobStats totalJobs={jobs.length} />

          <div className="grid lg:grid-cols-4 gap-8">

            <div>

              <JobFilters
                type={type}
                setType={setType}
                clearFilters={() => {
                  setSearch("");
                  setLocation("");
                  setType("");
                }}
              />

            </div>

            <div className="lg:col-span-3">

              <div className="flex justify-between items-center mb-6">

                <h2 className="text-2xl font-bold">
                  {filteredJobs.length} Jobs Found
                </h2>

              </div>

              <div className="space-y-6">

                {filteredJobs.length > 0 ? (
                  filteredJobs.map((job) => (
                    <JobCard
                      key={job.id}
                      job={job}
                    />
                  ))
                ) : (
                  <div className="bg-white rounded-2xl shadow p-16 text-center">

                    <h2 className="text-3xl font-bold">
                      No Jobs Found
                    </h2>

                    <p className="text-gray-500 mt-3">
                      Try changing your search or filters.
                    </p>

                  </div>
                )}

              </div>

            </div>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
};

export default Jobs;