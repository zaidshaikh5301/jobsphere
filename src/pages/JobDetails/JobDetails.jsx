import { useEffect } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

import JobDetailsCard from "../Jobs/JobDetailsCard";
import JobDescription from "../Jobs/JobDescription";
import JobRequirement from "../Jobs/JobRequirement";
import ApplySection from "../Jobs/ApplySection";

import { useJobs } from "../../context/JobContext";

const JobDetails = () => {
  const { id } = useParams();

  const { getJob } = useJobs();

  const job = getJob(id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!job) {
    return (
      <>
        <Navbar />

        <div className="min-h-screen flex items-center justify-center bg-slate-100">
          <div className="bg-white rounded-2xl shadow-xl p-10 text-center">

            <h1 className="text-4xl font-bold mb-4">
              Job Not Found
            </h1>

            <p className="text-gray-500">
              This job doesn't exist or has been deleted.
            </p>

          </div>
        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="bg-slate-100 min-h-screen py-10">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-3 gap-8">

            <div className="lg:col-span-2 space-y-8">

              <JobDetailsCard job={job} />

              <JobDescription job={job} />

              <JobRequirement job={job} />

            </div>

            <div>

              <ApplySection job={job} />

            </div>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
};

export default JobDetails;