function JobRequirements({ job }) {
  const requirements = Array.isArray(job.requirements)
    ? job.requirements
    : job.requirements
        ?.split("\n")
        .map((item) => item.trim())
        .filter(Boolean) || [];

  const responsibilities = Array.isArray(job.responsibilities)
    ? job.responsibilities
    : job.responsibilities
        ?.split("\n")
        .map((item) => item.trim())
        .filter(Boolean) || [];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">

      <h2 className="text-2xl font-bold mb-6">
        Requirements
      </h2>

      {requirements.length > 0 ? (
        <ul className="space-y-4 list-disc ml-6">
          {requirements.map((item, index) => (
            <li key={index} className="text-gray-700">
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">
          No requirements provided.
        </p>
      )}

      <h2 className="text-2xl font-bold mt-10 mb-6">
        Responsibilities
      </h2>

      {responsibilities.length > 0 ? (
        <ul className="space-y-4 list-disc ml-6">
          {responsibilities.map((item, index) => (
            <li key={index} className="text-gray-700">
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">
          No responsibilities provided.
        </p>
      )}

    </div>
  );
}

export default JobRequirements;