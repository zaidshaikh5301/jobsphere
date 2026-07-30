import Navbar from "../../components/layout/Navbar";
import { useApplications } from "../../context/ApplicationContext";

const statusColors = {
  Pending: "bg-yellow-100 text-yellow-700",
  Shortlisted: "bg-blue-100 text-blue-700",
  Interview: "bg-purple-100 text-purple-700",
  Hired: "bg-green-100 text-green-700",
  Rejected: "bg-red-100 text-red-700",
};

function MyApplications() {
  const { applications } = useApplications();

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-6">

          <h1 className="text-4xl font-bold mb-8">
            My Applications
          </h1>

          {applications.length === 0 ? (
            <div className="bg-white rounded-xl shadow p-10 text-center">
              <h2 className="text-2xl font-bold">
                No Applications Yet
              </h2>

              <p className="text-gray-500 mt-3">
                Apply for a job to see your applications here.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {applications.map((application) => (
                <div
                  key={application.id}
                  className="bg-white rounded-xl shadow-lg border border-gray-200 p-6"
                >
                  <div className="flex justify-between items-start">

                    <div>
                      <h2 className="text-2xl font-bold">
                        {application.jobTitle}
                      </h2>

                      <p className="text-blue-600 font-semibold mt-1">
                        {application.company}
                      </p>
                    </div>

                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        statusColors[application.status] ||
                        "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {application.status}
                    </span>

                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mt-6">

                    <p>
                      👤 <strong>Name:</strong>{" "}
                      {application.candidateName}
                    </p>

                    <p>
                      📧 <strong>Email:</strong>{" "}
                      {application.email}
                    </p>

                    <p>
                      📞 <strong>Phone:</strong>{" "}
                      {application.phone}
                    </p>

                    <p>
                      📍 <strong>Location:</strong>{" "}
                      {application.location}
                    </p>

                    <p>
                      💼 <strong>Experience:</strong>{" "}
                      {application.experience || "Fresher"}
                    </p>

                    <p>
                      🎓 <strong>Education:</strong>{" "}
                      {application.education}
                    </p>

                    <p>
                      💰 <strong>Salary:</strong>{" "}
                      {application.salary || "Not Disclosed"}
                    </p>

                    <p>
                      🏢 <strong>Job Type:</strong>{" "}
                      {application.jobType}
                    </p>

                    <p>
                      📅 <strong>Applied On:</strong>{" "}
                      {application.appliedDate}
                    </p>

                    <p>
                      📄 <strong>Resume:</strong>{" "}
                      {application.resume || "Not Uploaded"}
                    </p>

                  </div>

                  {application.skills?.length > 0 && (
                    <div className="mt-5">
                      <h3 className="font-semibold mb-2">
                        Skills
                      </h3>

                      <div className="flex flex-wrap gap-2">
                        {application.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {application.coverLetter && (
                    <div className="mt-5">
                      <h3 className="font-semibold mb-2">
                        Cover Letter
                      </h3>

                      <p className="text-gray-600">
                        {application.coverLetter}
                      </p>
                    </div>
                  )}

                  {application.notes && (
                    <div className="mt-5 rounded-lg bg-yellow-50 border border-yellow-200 p-4">
                      <h3 className="font-semibold text-yellow-800">
                        Recruiter's Note
                      </h3>

                      <p className="text-yellow-700 mt-2">
                        {application.notes}
                      </p>
                    </div>
                  )}

                </div>
              ))}
            </div>
          )}

        </div>
      </section>
    </>
  );
}

export default MyApplications;