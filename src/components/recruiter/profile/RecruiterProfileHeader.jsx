import { Camera } from "lucide-react";
import { useRecruiter } from "../../../context/RecruiterContext";

const RecruiterProfileHeader = () => {
  const { recruiter } = useRecruiter();

  return (
    <div className="bg-white rounded-2xl shadow border p-8">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="relative">
          <img
            src={
              recruiter.avatar ||
              "https://ui-avatars.com/api/?name=Recruiter&background=2563eb&color=fff"
            }
            alt="avatar"
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-100"
          />

          <button className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full">
            <Camera size={18} />
          </button>
        </div>

        <div className="flex-1">
          <h1 className="text-3xl font-bold">
            {recruiter.firstName} {recruiter.lastName}
          </h1>

          <p className="text-lg text-gray-600 mt-2">
            {recruiter.designation}
          </p>

          <p className="text-gray-500">
            {recruiter.department}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecruiterProfileHeader;