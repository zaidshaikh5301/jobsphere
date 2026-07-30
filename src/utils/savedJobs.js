export const getSavedJobs = () => {
  const jobs = localStorage.getItem("savedJobs");
  return jobs ? JSON.parse(jobs) : [];
};

export const isJobSaved = (jobId) => {
  return getSavedJobs().includes(jobId);
};

export const toggleSaveJob = (jobId) => {
  const savedJobs = getSavedJobs();

  if (savedJobs.includes(jobId)) {
    const updated = savedJobs.filter((id) => id !== jobId);

    localStorage.setItem(
      "savedJobs",
      JSON.stringify(updated)
    );

    return false;
  }

  savedJobs.push(jobId);

  localStorage.setItem(
    "savedJobs",
    JSON.stringify(savedJobs)
  );

  return true;
};