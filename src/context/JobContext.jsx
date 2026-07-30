import { createContext, useContext, useEffect, useState } from "react";
import { storage } from "../utils/storage";

const JobContext = createContext();

export const JobProvider = ({ children }) => {
  // Load jobs from localStorage using storage utility
  const [jobs, setJobs] = useState(() => storage.get("jobs"));

  // Persist jobs whenever state changes
  useEffect(() => {
    storage.set("jobs", jobs);
  }, [jobs]);

  // ================= CREATE =================
  const addJob = (jobData) => {
    const newJob = {
      id: crypto.randomUUID(),

      title: jobData.title,
      company: jobData.company,
      location: jobData.location,
      salary: jobData.salary,
      experience: jobData.experience,
      type: jobData.type,
      category: jobData.category,
      vacancies: Number(jobData.vacancies),
      workMode: jobData.workMode,

      description: jobData.description,
      requirements: jobData.requirements,
      responsibilities: jobData.responsibilities,

      skills: Array.isArray(jobData.skills)
        ? jobData.skills
        : jobData.skills
        ? jobData.skills
            .split(",")
            .map((skill) => skill.trim())
            .filter(Boolean)
        : [],

      logo: jobData.logo || "",

      applicants: [],

      status: "Active",

      postedBy: "Recruiter",

      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    setJobs((prevJobs) => [newJob, ...prevJobs]);
  };

  // ================= READ =================
  const getJob = (id) => jobs.find((job) => job.id === id);

  // Better named function for edit pages
  const getJobById = (id) => jobs.find((job) => job.id === id);

  // ================= UPDATE =================
  const updateJob = (id, updatedData) => {
    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job.id === id
          ? {
              ...job,
              ...updatedData,

              // Convert skills string to array if needed
              skills: Array.isArray(updatedData.skills)
                ? updatedData.skills
                : updatedData.skills
                ? updatedData.skills
                    .split(",")
                    .map((skill) => skill.trim())
                    .filter(Boolean)
                : job.skills,

              updatedAt: new Date().toISOString(),
            }
          : job
      )
    );
  };

  // ================= DELETE =================
  const deleteJob = (id) => {
    if (!id) return;

    setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id));
  };

  // ================= STATUS =================
  const toggleJobStatus = (id) => {
    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job.id === id
          ? {
              ...job,
              status: job.status === "Active" ? "Inactive" : "Active",
              updatedAt: new Date().toISOString(),
            }
          : job
      )
    );
  };

  // ================= CLEAR =================
  const clearJobs = () => {
    setJobs([]);
    storage.remove("jobs");
  };

  return (
    <JobContext.Provider
      value={{
        jobs,
        setJobs,

        addJob,
        getJob,
        getJobById,
        updateJob,
        deleteJob,
        toggleJobStatus,
        clearJobs,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};

export const useJobs = () => useContext(JobContext);