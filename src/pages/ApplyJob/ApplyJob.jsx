import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import {
  User,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Globe,
  Upload,
  FileText,
  Link,
} from "lucide-react";


import Navbar from "../../components/layout/Navbar";


import { useJobs } from "../../context/JobContext";
import { useApplications } from "../../context/ApplicationContext";

function ApplyJob() {

  const { id } = useParams();
  const navigate = useNavigate();

  // Context data
  const { jobs } = useJobs();
  const { addApplication, applications } = useApplications();

  // Find selected job
  const job = jobs.find(
    (job) => String(job.id) === String(id)
  );

  // Form state
  const [formData, setFormData] = useState({

    candidateName: "",
    email: "",
    phone: "",
    location: "",
    experience: "",
    education: "",
    portfolio: "",
    github: "",
    linkedin: "",
    skills: "",
    resume: null,
    coverLetter: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {

    const {
      name,
      value
    } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    // remove field error while typing
    setErrors((prev) => ({
      ...prev,
      [name]: ""
    }));
  };

  // Resume upload handler
  const handleResumeUpload = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ];

    if (!allowedTypes.includes(file.type)) {
      toast.error(
        "Only PDF or Word files are allowed"
      );
      return;
    }

    setFormData((prev) => ({
      ...prev,
      resume: file
    }));
  };

  // Validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.candidateName.trim()) {
      newErrors.candidateName = "Full name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }
    else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/
        .test(formData.email)
    ) {
      newErrors.email = "Enter valid email";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number required";
    }
    else if (
      !/^[0-9]{10}$/
        .test(formData.phone)
    ) {
      newErrors.phone = "Enter valid 10 digit number";
    }
    if (!formData.location.trim()) {
      newErrors.location = "Location required";
    }
    if (!formData.education.trim()) {
      newErrors.education = "Education required";
    }
    if (!formData.skills.trim()) {
      newErrors.skills = "Skills required";
    }
    if (!formData.resume) {
      newErrors.resume = "Resume required";
    }
    if (formData.coverLetter.length < 5) {
      newErrors.coverLetter =
        "Cover letter should be minimum 5 characters";
    }
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Submit handler

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the errors.");
      return;
    }

    setLoading(true);

    const result = addApplication({
      jobId: job.id,
      jobTitle: job.title,
      company: job.company,
      salary: job.salary,
      jobType: job.type,
      location: job.location,

      candidateName: formData.candidateName,
      email: formData.email,
      phone: formData.phone,
      experience: formData.experience,
      education: formData.education,

      portfolio: formData.portfolio,
      github: formData.github,
      linkedin: formData.linkedin,

      resume: formData.resume
        ? formData.resume.name
        : "",

      skills: formData.skills
        .split(",")
        .map((skill) => skill.trim())
        .filter(Boolean),

      coverLetter: formData.coverLetter,
    });

    setLoading(false);

    if (!result.success) {
      toast.error(result.message);
      return;
    }

    toast.success("Application submitted successfully");

    navigate("/my-applications");
  };

  if (!job) {
    return (
      <>
        <Navbar />

        <div className="p-10 text-center">
          <h2 className="text-2xl font-semibold">
            Job not found
          </h2>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-50 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* ================= JOB SUMMARY ================= */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-sm border p-6 sticky top-24">
                <h2 className="text-xl font-bold text-gray-800 mb-5">
                  Job Summary
                </h2>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">
                      Company
                    </p>

                    <p className="font-semibold text-gray-800">
                      {job.company}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Position
                    </p>

                    <p className="font-semibold text-gray-800">
                      {job.title}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">

                    <MapPin size={18} className="text-blue-600" />

                    <span>

                      {job.location}

                    </span>

                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Salary
                    </p>

                    <p className="font-semibold">
                      {job.salary || "Not disclosed"}
                    </p>
                  </div>

                  <div>

                    <p className="text-sm text-gray-500">
                      Experience
                    </p>

                    <p className="font-semibold">
                      {job.experience || "Fresher"}
                    </p>

                  </div>

                  <div>

                    <p className="text-sm text-gray-500">
                      Job Type
                    </p>

                    <p className="font-semibold">
                      {job.type}
                    </p>

                  </div>

                  <div>

                    <p className="text-sm text-gray-500 mb-2">
                      Required Skills
                    </p>

                    <div className="flex flex-wrap gap-2">

                      {

                        job.skills?.map((skill, index) => (

                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))
                      }
                    </div>

                  </div>

                </div>

              </div>

            </div>

            {/* ================= APPLICATION FORM ================= */}

            <div className="lg:col-span-2">

              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl shadow-sm border p-6 md:p-8"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Apply For This Position
                </h2>

                {/* PERSONAL DETAILS */}

                <h3 className="text-lg font-semibold mb-4">
                  Personal Information
                </h3>

                <div className="grid md:grid-cols-2 gap-5">

                  {/* Full Name */}

                  <div>

                    <label className="block text-sm font-medium mb-2">
                      Candidate Name
                    </label>

                    <div className="relative">

                      <User
                        className="absolute left-3 top-3 text-gray-400"
                        size={18}
                      />

                      <input
                        type="text"
                        name="candidateName"
                        value={formData.candidateName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="w-full pl-10 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                      />
                    </div>

                    {
                      errors.candidateName &&
                      <p className="text-red-500 text-sm mt-1">
                        {errors.candidateName}
                      </p>
                    }

                  </div>

                  {/* Email */}

                  <div>

                    <label className="block text-sm font-medium mb-2">
                      Email Address
                    </label>

                    <div className="relative">

                      <Mail
                        className="absolute left-3 top-3 text-gray-400"
                        size={18}
                      />

                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@gmail.com"
                        className="w-full pl-10 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                      />

                    </div>

                    {
                      errors.email &&
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    }

                  </div>

                  {/* Phone */}

                  <div>

                    <label className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>

                    <div className="relative">

                      <Phone
                        className="absolute left-3 top-3 text-gray-400"
                        size={18}
                      />

                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="10 digit mobile number"
                        className="w-full pl-10 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                      />

                    </div>

                    {
                      errors.phone &&
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone}
                      </p>
                    }

                  </div>

                  {/* Location */}

                  <div>

                    <label className="block text-sm font-medium mb-2">
                      Current Location
                    </label>

                    <div className="relative">

                      <MapPin
                        className="absolute left-3 top-3 text-gray-400"
                        size={18}
                      />

                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="Ahmedabad, Gujarat"
                        className="w-full pl-10 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                      />

                    </div>

                    {

                      errors.location &&

                      <p className="text-red-500 text-sm mt-1">

                        {errors.location}

                      </p>

                    }



                  </div>






                </div>








                {/* PROFESSIONAL DETAILS */}



                <h3 className="text-lg font-semibold mt-8 mb-4">

                  Professional Details

                </h3>





                <div className="grid md:grid-cols-2 gap-5">





                  <div>


                    <label className="block text-sm font-medium mb-2">

                      Experience

                    </label>


                    <input

                      type="text"

                      name="experience"

                      value={formData.experience}

                      onChange={handleChange}

                      placeholder="Example: 1 Year"

                      className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"

                    />


                  </div>







                  <div>


                    <label className="block text-sm font-medium mb-2">

                      Highest Education

                    </label>


                    <div className="relative">


                      <GraduationCap

                        className="absolute left-3 top-3 text-gray-400"

                        size={18}

                      />



                      <input

                        type="text"

                        name="education"

                        value={formData.education}

                        onChange={handleChange}

                        placeholder="BCA, MCA, B.Tech..."

                        className="w-full pl-10 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"

                      />



                    </div>



                    {

                      errors.education &&

                      <p className="text-red-500 text-sm mt-1">

                        {errors.education}

                      </p>

                    }



                  </div>



                </div>




                {/* LINKS SECTION */}


                <h3 className="text-lg font-semibold mt-8 mb-4">

                  Professional Links

                </h3>



                <div className="grid md:grid-cols-2 gap-5">





                  {/* Portfolio */}


                  <div>


                    <label className="block text-sm font-medium mb-2">

                      Portfolio URL

                    </label>

                    <div className="relative">

                      <Globe
                        size={18}
                        className="absolute left-3 top-3 text-gray-400"
                      />

                      <input
                        type="url"
                        name="portfolio"
                        value={formData.portfolio}
                        onChange={handleChange}
                        placeholder="https://yourportfolio.com"
                        className="w-full pl-10 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                      />

                    </div>

                  </div>

                  {/* Github */}

                  <div>

                    <label className="block text-sm font-medium mb-2">
                      GitHub URL
                    </label>

                    <div className="relative">

                      <Globe
                        size={18}
                        className="absolute left-3 top-3 text-gray-400"
                      />

                      <input
                        type="url"
                        name="github"
                        value={formData.github}
                        onChange={handleChange}
                        placeholder="https://github.com/username"
                        className="w-full pl-10 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                      />

                    </div>

                  </div>

                  {/* LinkedIn */}

                  <div>

                    <label className="block text-sm font-medium mb-2">
                      LinkedIn URL
                    </label>

                    <div className="relative">

                      <Link
                        size={18}
                        className="absolute left-3 top-3 text-gray-400"
                      />

                      <input
                        type="url"
                        name="linkedin"
                        value={formData.linkedin}
                        onChange={handleChange}
                        placeholder="https://linkedin.com/in/profile"
                        className="w-full pl-10 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                      />

                    </div>

                  </div>

                </div>

                {/* SKILLS */}

                <div className="mt-5">

                  <label className="block text-sm font-medium mb-2">
                    Skills
                  </label>

                  <input
                    type="text"
                    name="skills"
                    value={formData.skills}
                    onChange={handleChange}
                    placeholder="React, JavaScript, Tailwind, Node.js"
                    className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                  />

                  <p className="text-xs text-gray-500 mt-1">
                    Separate skills using commas
                  </p>

                  {
                    errors.skills &&
                    <p className="text-red-500 text-sm mt-1">
                      {errors.skills}
                    </p>
                  }

                </div>

                {/* RESUME */}

                <div className="mt-6">

                  <label className="block text-sm font-medium mb-2">
                    Resume Upload
                  </label>

                  <label className="flex items-center gap-3 border-2 border-dashed rounded-lg p-5 cursor-pointer hover:bg-gray-50">

                    <Upload
                      size={22}
                      className="text-blue-600"
                    />

                    <div>

                      <p className="font-medium">
                        Upload Resume
                      </p>

                      <p className="text-sm text-gray-500">
                        PDF or DOC file only
                      </p>

                    </div>

                    <input
                      type="file"
                      hidden
                      accept=".pdf,.doc,.docx"
                      onChange={handleResumeUpload}
                    />

                  </label>

                  {
                    formData.resume &&

                    <div className="mt-3 flex items-center gap-2 text-sm text-green-600">

                      <FileText size={18} />

                      {formData.resume.name}

                    </div>
                  }

                  {
                    errors.resume &&
                    <p className="text-red-500 text-sm mt-1">
                      {errors.resume}
                    </p>
                  }

                </div>

                {/* COVER LETTER */}

                <div className="mt-6">

                  <label className="block text-sm font-medium mb-2">
                    Cover Letter
                  </label>

                  <textarea
                    rows="6"
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleChange}
                    placeholder="Tell recruiter why you are suitable for this role..."
                    className="w-full border rounded-lg px-3 py-3 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                  />

                  <div className="flex justify-between mt-1">

                    <span className="text-xs text-gray-500">
                      Minimum 5 characters
                    </span>

                    <span className="text-xs text-gray-500">
                      {formData.coverLetter.length} characters
                    </span>

                  </div>

                  {
                    errors.coverLetter &&
                    <p className="text-red-500 text-sm mt-1">
                      {errors.coverLetter}
                    </p>
                  }

                </div>

                {/* SUBMIT BUTTON */}

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-8 w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition disabled:opacity-50"
                >
                  {
                    loading
                      ?
                      "Submitting..."
                      :
                      "Submit Application"
                  }

                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

    </>
  );
}

export default ApplyJob;