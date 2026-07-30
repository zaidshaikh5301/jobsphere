import { useState } from "react";
import { Save } from "lucide-react";
import { toast } from "react-toastify";
import { useRecruiter } from "../../../context/RecruiterContext";

const AboutCard = () => {
  const { recruiter, updateRecruiter } = useRecruiter();

  const [about, setAbout] = useState(recruiter.about || "");
  const [skills, setSkills] = useState(
    recruiter.skills?.join(", ") || ""
  );
  const [languages, setLanguages] = useState(
    recruiter.languages?.join(", ") || ""
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    updateRecruiter({
      about,
      skills: skills
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),

      languages: languages
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),
    });

    toast.success("About information updated");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow border p-8"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">
          About Me
        </h2>

        <button
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
        >
          <Save size={18} />
          Save
        </button>
      </div>

      {/* About */}

      <div>
        <label className="block font-medium mb-2">
          Professional Summary
        </label>

        <textarea
          rows={6}
          value={about}
          onChange={(e) => setAbout(e.target.value)}
          placeholder="Write a short introduction about yourself..."
          className="w-full border rounded-lg p-3 resize-none focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      {/* Skills */}

      <div className="mt-6">
        <label className="block font-medium mb-2">
          Skills
        </label>

        <input
          type="text"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          placeholder="Recruitment, Interviewing, ATS, HR, Communication"
          className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <p className="text-sm text-gray-500 mt-1">
          Separate skills with commas.
        </p>
      </div>

      {/* Languages */}

      <div className="mt-6">
        <label className="block font-medium mb-2">
          Languages
        </label>

        <input
          type="text"
          value={languages}
          onChange={(e) => setLanguages(e.target.value)}
          placeholder="English, Hindi"
          className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <p className="text-sm text-gray-500 mt-1">
          Separate languages with commas.
        </p>
      </div>
    </form>
  );
};

export default AboutCard;