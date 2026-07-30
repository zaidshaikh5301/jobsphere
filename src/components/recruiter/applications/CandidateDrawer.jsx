import {
  X,
  Mail,
  Phone,
  BriefcaseBusiness,
  GraduationCap,
  Award,
  Globe,
  CalendarDays,
  UserCheck,
  CheckCircle2,
  XCircle,
  Download,
} from "lucide-react";

const CandidateDrawer = ({
  candidate,
  open,
  onClose,
  shortlist,
  hire,
  reject,
}) => {

  if (!open || !candidate) return null;

  return (
    <>
      {/* Overlay */}

      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/40 z-40"
      />

      {/* Drawer */}

      <div className="fixed top-0 right-0 h-screen w-full md:w-[500px] bg-white z-50 shadow-2xl overflow-y-auto">

        <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-center">

          <h2 className="text-2xl font-bold">
            Candidate Profile
          </h2>

          <button onClick={onClose}>
            <X />
          </button>

        </div>

        <div className="p-6">

          {/* Avatar */}

          <div className="flex flex-col items-center">

            <div className="w-24 h-24 rounded-full bg-blue-600 text-white text-3xl font-bold flex items-center justify-center">

              {candidate.candidateName?.charAt(0)}

            </div>

            <h2 className="text-2xl font-bold mt-4">

              {candidate.candidateName}

            </h2>

            <p className="text-gray-500">

              {candidate.jobTitle}

            </p>

          </div>

          <hr className="my-6"/>

          <div className="space-y-4">

            <div className="flex gap-3">

              <Mail size={18}/>

              {candidate.email}

            </div>

            <div className="flex gap-3">

              <Phone size={18}/>

              {candidate.phone || "Not Available"}

            </div>

            <div className="flex gap-3">

              <BriefcaseBusiness size={18}/>

              {candidate.experience}

            </div>

            <div className="flex gap-3">

              <GraduationCap size={18}/>

              {candidate.education}

            </div>

            <div className="flex gap-3">

              <Award size={18}/>

              {candidate.skills?.join(", ")}

            </div>

            <div className="flex gap-3">

              <Github size={18}/>

              {candidate.github || "N/A"}

            </div>

            <div className="flex gap-3">

              <Globe size={18}/>

              {candidate.portfolio || "N/A"}

            </div>

            <div className="flex gap-3">

              <CalendarDays size={18}/>

              Applied {candidate.appliedDate}

            </div>

          </div>

          <hr className="my-8"/>

          <div className="grid grid-cols-2 gap-4">

            <button
              onClick={() => shortlist(candidate.id)}
              className="bg-blue-600 text-white rounded-xl py-3"
            >
              <div className="flex justify-center gap-2">
                <UserCheck size={18}/>
                Shortlist
              </div>
            </button>

            <button
              onClick={() => hire(candidate.id)}
              className="bg-green-600 text-white rounded-xl py-3"
            >
              <div className="flex justify-center gap-2">
                <CheckCircle2 size={18}/>
                Hire
              </div>
            </button>

            <button
              className="bg-purple-600 text-white rounded-xl py-3"
            >
              <div className="flex justify-center gap-2">
                <Download size={18}/>
                Resume
              </div>
            </button>

            <button
              onClick={() => reject(candidate.id)}
              className="bg-red-600 text-white rounded-xl py-3"
            >
              <div className="flex justify-center gap-2">
                <XCircle size={18}/>
                Reject
              </div>
            </button>

          </div>

        </div>

      </div>

    </>
  );
};

export default CandidateDrawer;