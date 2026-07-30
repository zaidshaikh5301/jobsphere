const applicants = [
  {
    id: 1,
    name: "Zaid Shaikh",
    job: "Frontend Developer",
  },
  {
    id: 2,
    name: "Rahul Patel",
    job: "React Developer",
  },
  {
    id: 3,
    name: "Priya Sharma",
    job: "UI/UX Designer",
  },
];

const RecentApplications = () => {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-semibold mb-5">
        Recent Applications
      </h2>

      <div className="space-y-4">
        {applicants.map((app) => (
          <div key={app.id} className="border-b pb-3">
            <h3 className="font-semibold">{app.name}</h3>
            <p className="text-gray-500 text-sm">{app.job}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentApplications;