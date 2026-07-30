import { useMemo, useState } from "react";

import { useApplications } from "../../context/ApplicationContext";
import { useJobs } from "../../context/JobContext";

import ApplicationStats from "../../components/recruiter/applications/ApplicationStats";
import ApplicationFilters from "../../components/recruiter/applications/ApplicationFilters";
import ApplicationsTable from "../../components/recruiter/applications/ApplicationsTable";
import CandidateDrawer from "../../components/recruiter/applications/CandidateDrawer";
import EmptyState from "../../components/recruiter/applications/EmptyState";

const Applications = () => {
  const {
    applications,
    shortlistCandidate,
    rejectCandidate,
    hireCandidate,
  } = useApplications();

  const { jobs } = useJobs();

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [job, setJob] = useState("All");

  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const filteredApplications = useMemo(() => {
    return applications.filter((app) => {
      const matchesSearch =
        app.candidateName
          ?.toLowerCase()
          .includes(search.toLowerCase()) ||
        app.email
          ?.toLowerCase()
          .includes(search.toLowerCase()) ||
        app.jobTitle
          ?.toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        status === "All" || app.status === status;

      const matchesJob =
        job === "All" || app.jobTitle === job;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesJob
      );
    });
  }, [applications, search, status, job]);

  return (
    <div className="space-y-8">

      <ApplicationStats />

      <ApplicationFilters
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
        job={job}
        setJob={setJob}
        jobs={jobs}
      />

      {filteredApplications.length > 0 ? (
        <ApplicationsTable
          applications={filteredApplications}
          onView={setSelectedCandidate}
          shortlist={shortlistCandidate}
          reject={rejectCandidate}
          hire={hireCandidate}
        />
      ) : (
        <EmptyState />
      )}

      <CandidateDrawer
        candidate={selectedCandidate}
        open={!!selectedCandidate}
        onClose={() => setSelectedCandidate(null)}
        shortlist={shortlistCandidate}
        reject={rejectCandidate}
        hire={hireCandidate}
      />

    </div>
  );
};

export default Applications;