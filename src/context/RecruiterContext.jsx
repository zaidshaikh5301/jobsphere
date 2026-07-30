import { createContext, useContext, useEffect, useState } from "react";

const RecruiterContext = createContext();

export const useRecruiter = () => useContext(RecruiterContext);

const defaultRecruiter = {
  // Personal Information
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@gmail.com",
  phone: "+91 9876543210",

  designation: "Senior Technical Recruiter",
  department: "Talent Acquisition",
  experience: "5 Years",

  // Profile
  about:
    "Experienced Technical Recruiter specializing in hiring Frontend, Backend and Full Stack Developers. Passionate about connecting talented engineers with great opportunities.",

  skills: [
    "Technical Recruitment",
    "Interviewing",
    "ATS",
    "Communication",
  ],

  languages: [
    "English",
    "Hindi",
  ],

  // Social
  linkedin: "",
  github: "",
  portfolio: "",

  // Avatar
  avatar: "",
};

export const RecruiterProvider = ({ children }) => {
  const [recruiter, setRecruiter] = useState(() => {
    const saved = localStorage.getItem("recruiterProfile");

    return saved
      ? JSON.parse(saved)
      : defaultRecruiter;
  });

  useEffect(() => {
    localStorage.setItem(
      "recruiterProfile",
      JSON.stringify(recruiter)
    );
  }, [recruiter]);

  // Update recruiter profile
  const updateRecruiter = (updatedData) => {
    setRecruiter((prev) => ({
      ...prev,
      ...updatedData,
    }));
  };

  // Reset profile
  const resetRecruiter = () => {
    setRecruiter(defaultRecruiter);
    localStorage.removeItem("recruiterProfile");
  };

  return (
    <RecruiterContext.Provider
      value={{
        recruiter,
        updateRecruiter,
        resetRecruiter,
      }}
    >
      {children}
    </RecruiterContext.Provider>
  );
};