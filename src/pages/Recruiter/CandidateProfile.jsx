import { useState } from "react";
import { useParams } from "react-router-dom";
import RecruiterLayout from "../../layouts/RecruiterLayout";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  GraduationCap,
  Briefcase,
  Globe,
  Download,
  MessageSquare,
  CheckCircle,
  XCircle,
  CalendarDays,
  FileText,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const CandidateProfile = () => {
  const { id } = useParams();

const candidate ={ id:1,
    name: "Zaid Shaikh",
    role: "Frontend Developer",
    email: "zaid@gmail.com",
    phone: "+91 9876543210",
    location: "Surat, Gujarat",
    experience: "Fresher",
    dob: "22 March 2003",

    about:
      "Passionate Frontend Developer skilled in React.js, JavaScript and Tailwind CSS. Looking for an opportunity to build scalable web applications.",

    skills: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind",
      "Node.js",
      "MongoDB",
      "Git",
    ],

    education: [
      {
        degree: "Bachelor of Computer Applications",
        college: "Naran Lala College",
        year: "2026",
      },
    ],

    experienceList: [
      {
        company: "Personal Projects",
        role: "Frontend Developer",
        duration: "2025 - Present",
      },
    ],

    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    portfolio: "https://portfolio.com",
  }


  return (
    <div>



      {/* Header */}

      <div className="bg-white rounded-2xl shadow p-8">

        <div className="flex flex-col lg:flex-row justify-between">

          <div className="flex gap-6">

            <img
              src={`https://ui-avatars.com/api/?name=${candidate.name}`}
              alt=""
              className="w-32 h-32 rounded-full"
            />

            <div>

              <h1 className="text-4xl font-bold">
                {candidate.name}
              </h1>

              <p className="text-blue-600 text-lg mt-2">
                {candidate.role}
              </p>

              <div className="grid md:grid-cols-2 gap-3 mt-6">

                <p className="flex items-center gap-2">
                  <Mail size={18}/>
                  {candidate.email}
                </p>

                <p className="flex items-center gap-2">
                  <Phone size={18}/>
                  {candidate.phone}
                </p>

                <p className="flex items-center gap-2">
                  <MapPin size={18}/>
                  {candidate.location}
                </p>

                <p className="flex items-center gap-2">
                  <Calendar size={18}/>
                  {candidate.dob}
                </p>

              </div>

            </div>

          </div>

          <div className="flex flex-col gap-3 mt-8 lg:mt-0">

            <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl flex items-center gap-2">
              <CheckCircle size={18}/>
              Shortlist
            </button>

            <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-xl flex items-center gap-2">
              <XCircle size={18}/>
              Reject
            </button>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl flex items-center gap-2">
              <CalendarDays size={18}/>
              Interview
            </button>

          </div>

        </div>

      </div>

      {/* About */}

      <div className="bg-white rounded-2xl shadow p-8 mt-8">

        <h2 className="text-2xl font-bold mb-4">
          About Candidate
        </h2>

        <p className="text-gray-600 leading-8">
          {candidate.about}
        </p>

      </div>

      {/* Skills */}

      <div className="bg-white rounded-2xl shadow p-8 mt-8">

        <h2 className="text-2xl font-bold mb-5">
          Skills
        </h2>

        <div className="flex flex-wrap gap-3">

          {candidate.skills.map((skill) => (

            <span
              key={skill}
              className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full"
            >
              {skill}
            </span>

          ))}

        </div>

      </div>

      {/* Education */}

      <div className="bg-white rounded-2xl shadow p-8 mt-8">

        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <GraduationCap />
          Education
        </h2>

        {candidate.education.map((edu, index) => (

          <div
            key={index}
            className="border rounded-xl p-5 mb-4"
          >

            <h3 className="font-semibold text-lg">
              {edu.degree}
            </h3>

            <p className="text-gray-500 mt-2">
              {edu.college}
            </p>

            <p className="text-sm text-gray-400 mt-1">
              {edu.year}
            </p>

          </div>

        ))}

      </div>

      {/* Experience */}

      <div className="bg-white rounded-2xl shadow p-8 mt-8">

        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Briefcase />
          Experience
        </h2>

        {candidate.experienceList.map((exp, index) => (

          <div
            key={index}
            className="border rounded-xl p-5 mb-4"
          >

            <h3 className="font-semibold text-lg">
              {exp.role}
            </h3>

            <p className="text-gray-500 mt-2">
              {exp.company}
            </p>

            <p className="text-sm text-gray-400 mt-1">
              {exp.duration}
            </p>

          </div>

        ))}

      </div>
      
      {/* Resume & Social Links */}

      <div className="grid lg:grid-cols-2 gap-8 mt-8">

        {/* Resume */}

        <div className="bg-white rounded-2xl shadow p-8">

          <div className="flex justify-between items-center mb-6">

            <h2 className="text-2xl font-bold flex items-center gap-2">
              <FileText />
              Resume
            </h2>

            <button
              onClick={() => alert("Resume downloaded successfully.")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg flex items-center gap-2"
            >
              <Download size={18} />
              Download
            </button>

          </div>

          <div className="border-2 border-dashed rounded-xl h-72 flex flex-col items-center justify-center text-gray-500">

            <FileText size={60} />

            <p className="mt-4">
              Resume Preview
            </p>

            <p className="text-sm mt-2">
              PDF Preview will appear here after backend integration.
            </p>

          </div>

        </div>

        {/* Links */}

        <div className="bg-white rounded-2xl shadow p-8">

          <h2 className="text-2xl font-bold mb-6">
            Portfolio & Profiles
          </h2>

          <div className="space-y-4">

            <a
              href={candidate.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 border rounded-xl p-4 hover:bg-gray-50"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href={candidate.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 border rounded-xl p-4 hover:bg-gray-50"
            >
              <FaLinkedin />
              LinkedIn
            </a>

            <a
              href={candidate.portfolio}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 border rounded-xl p-4 hover:bg-gray-50"
            >
              <Globe />
              Portfolio
            </a>

          </div>

        </div>

      </div>

      {/* Recruiter Notes */}

      <div className="bg-white rounded-2xl shadow p-8 mt-8">

        <h2 className="text-2xl font-bold mb-6">
          Recruiter Notes
        </h2>

        <textarea
          rows={6}
          placeholder="Write private notes about this candidate..."
          className="w-full border rounded-xl p-4 resize-none"
        />

        <div className="flex justify-end mt-5">

          <button
            onClick={() => alert("Notes saved successfully.")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl"
          >
            Save Notes
          </button>

        </div>

      </div>

      {/* Bottom Action Buttons */}

      <div className="flex flex-wrap justify-center gap-5 mt-8 mb-10">

        <button
          onClick={() => alert("Message feature coming with backend.")}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl flex items-center gap-2"
        >
          <MessageSquare size={18} />
          Send Message
        </button>

        <button
          onClick={() => alert("Candidate shortlisted.")}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl flex items-center gap-2"
        >
          <CheckCircle size={18} />
          Shortlist
        </button>

        <button
          onClick={() => alert("Interview scheduled.")}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-xl flex items-center gap-2"
        >
          <CalendarDays size={18} />
          Schedule Interview
        </button>

        <button
          onClick={() => alert("Candidate rejected.")}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl flex items-center gap-2"
        >
          <XCircle size={18} />
          Reject
        </button>

      </div>

    </div>
  );
};

export default CandidateProfile;