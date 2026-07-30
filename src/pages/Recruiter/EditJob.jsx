import { useParams, Navigate } from "react-router-dom";
import { useJobs } from "../../context/JobContext";
import JobForm from "../../components/recruiter/JobForm";

const EditJob = () => {
  const { id } = useParams();
  const { getJobById } = useJobs();

  const job = getJobById(id);

  if (!job) {
    return <Navigate to="/recruiter/manage-jobs" replace />;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Edit Job
        </h1>

        <p className="text-slate-500 mt-1">
          Update the job details below.
        </p>
      </div>

      <JobForm editJob={job} />
    </div>
  );
};

export default EditJob;