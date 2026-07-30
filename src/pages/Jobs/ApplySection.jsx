import { Link } from "react-router-dom";

function ApplySection({ job }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-24">

      <h2 className="text-2xl font-bold">
        Ready to Apply?
      </h2>

      <p className="text-gray-500 mt-3">
        Submit your application and start your journey with{" "}
        <span className="font-semibold">
          {job.company}
        </span>.
      </p>

      <Link to={`/apply/${job.id}`}>
        <button className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition">
          Apply Now
        </button>
      </Link>

      <button className="w-full mt-4 border border-blue-600 text-blue-600 hover:bg-blue-50 py-4 rounded-xl font-semibold transition">
        Save Job
      </button>

      <div className="border-t mt-8 pt-6">

        <h3 className="font-semibold mb-4">
          Job Overview
        </h3>

        <div className="space-y-3 text-gray-600">

          <div className="flex justify-between">
            <span>Company</span>
            <span>{job.company}</span>
          </div>

          <div className="flex justify-between">
            <span>Location</span>
            <span>{job.location}</span>
          </div>

          <div className="flex justify-between">
            <span>Salary</span>
            <span>{job.salary}</span>
          </div>

          <div className="flex justify-between">
            <span>Job Type</span>
            <span>{job.type}</span>
          </div>

        </div>

      </div>

    </div>
  );
}

export default ApplySection;