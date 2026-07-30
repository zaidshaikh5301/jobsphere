function JobDescription({ job }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">

      <h2 className="text-2xl font-bold mb-6">
        Job Description
      </h2>

      <p className="text-gray-600 leading-8">
        {job.description}
      </p>

    </div>
  );
}

export default JobDescription;