import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { storage } from "../utils/storage";

const ApplicationContext = createContext();

export const useApplications = () => useContext(ApplicationContext);

export const ApplicationProvider = ({ children }) => {
  const [applications, setApplications] = useState(() =>
    storage.get("applications")
  );

  useEffect(() => {
    storage.set("applications", applications);
  }, [applications]);

  // ======================
  // CREATE
  // ======================

  const addApplication = (applicationData) => {
    const alreadyApplied = applications.some(
      (app) =>
        app.jobId === applicationData.jobId &&
        app.email.toLowerCase() === applicationData.email.toLowerCase()
    );

    if (alreadyApplied) {
      return {
        success: false,
        message: "You have already applied for this job.",
      };
    }

    const newApplication = {
      id: crypto.randomUUID(),

      // Job Details
      jobId: applicationData.jobId,
      jobTitle: applicationData.jobTitle,
      company: applicationData.company,
      salary: applicationData.salary,
      jobType: applicationData.jobType,
      location: applicationData.location,

      // Candidate Details
      candidateId: applicationData.candidateId || crypto.randomUUID(),
      candidateName: applicationData.candidateName,
      email: applicationData.email,
      phone: applicationData.phone,
      experience: applicationData.experience,
      education: applicationData.education,

      // Links
      portfolio: applicationData.portfolio || "",
      github: applicationData.github || "",
      linkedin: applicationData.linkedin || "",

      // Resume
      resume: applicationData.resume || "",

      // Other
      skills: applicationData.skills || [],
      coverLetter: applicationData.coverLetter || "",

      status: "Pending",

      interview: null,

      notes: "",

      appliedDate: new Date().toLocaleDateString(),

      createdAt: new Date().toISOString(),

      updatedAt: new Date().toISOString(),
    };

    setApplications((prev) => [newApplication, ...prev]);

    return {
      success: true,
    };
  };

  // ======================
  // READ
  // ======================

  const getApplicationById = (id) =>
    applications.find((app) => app.id === id);

  const getApplicationsByJob = (jobId) =>
    applications.filter((app) => app.jobId === jobId);

  // ======================
  // UPDATE
  // ======================

  const updateApplication = (id, updatedData) => {
    setApplications((prev) =>
      prev.map((app) =>
        app.id === id
          ? {
              ...app,
              ...updatedData,
              updatedAt: new Date().toISOString(),
            }
          : app
      )
    );
  };

  const updateApplicationStatus = (id, status) => {
    updateApplication(id, { status });
  };

  // ======================
  // DELETE
  // ======================

  const deleteApplication = (id) => {
    setApplications((prev) =>
      prev.filter((app) => app.id !== id)
    );
  };

  // ======================
  // Recruiter Actions
  // ======================

  const shortlistCandidate = (id) =>
    updateApplicationStatus(id, "Shortlisted");

  const rejectCandidate = (id) =>
    updateApplicationStatus(id, "Rejected");

  const hireCandidate = (id) =>
    updateApplicationStatus(id, "Hired");

  const scheduleInterview = (id, interview) =>
    updateApplication(id, {
      status: "Interview",
      interview,
    });

  const addRecruiterNote = (id, note) =>
    updateApplication(id, {
      notes: note,
    });

  // ======================
  // Dashboard Stats
  // ======================

  const stats = useMemo(() => {
    return {
      totalApplications: applications.length,

      pendingApplications: applications.filter(
        (a) => a.status === "Pending"
      ).length,

      shortlistedApplications: applications.filter(
        (a) => a.status === "Shortlisted"
      ).length,

      interviewApplications: applications.filter(
        (a) => a.status === "Interview"
      ).length,

      hiredApplications: applications.filter(
        (a) => a.status === "Hired"
      ).length,

      rejectedApplications: applications.filter(
        (a) => a.status === "Rejected"
      ).length,
    };
  }, [applications]);

  return (
    <ApplicationContext.Provider
      value={{
        applications,

        addApplication,
        updateApplication,
        updateApplicationStatus,
        deleteApplication,

        getApplicationById,
        getApplicationsByJob,

        shortlistCandidate,
        rejectCandidate,
        hireCandidate,
        scheduleInterview,
        addRecruiterNote,

        ...stats,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};