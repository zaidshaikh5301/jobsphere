import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useJobs } from "../../context/JobContext";

const initialState = {
  title: "",
  company: "",
  location: "",
  salary: "",
  experience: "",
  type: "Full Time",
  category: "",
  vacancies: 1,
  workMode: "Onsite",
  skills: "",
  description: "",
  requirements: "",
  responsibilities: "",
};

const JobForm = ({ editJob = null }) => {
  const navigate = useNavigate();
  const { addJob, updateJob } = useJobs();

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editJob) {
      setFormData({
        ...initialState,
        ...editJob,
        skills: Array.isArray(editJob.skills)
          ? editJob.skills.join(", ")
          : editJob.skills || "",
      });
    }
  }, [editJob]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.title.trim()) newErrors.title = "Job title is required";
    if (!formData.company.trim()) newErrors.company = "Company is required";
    if (!formData.location.trim()) newErrors.location = "Location is required";
    if (!formData.salary.trim()) newErrors.salary = "Salary is required";
    if (!formData.description.trim())
      newErrors.description = "Description is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const payload = {
    ...formData,
    vacancies: Number(formData.vacancies),
    skills: formData.skills
      .split(",")
      .map((skill) => skill.trim())
      .filter(Boolean),
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    if (editJob) {
      updateJob(editJob.id, payload);
      toast.success("Job updated successfully");
    } else {
      addJob(payload);
      toast.success("Job published successfully");
    }

    navigate("/recruiter/manage-jobs");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-8">
      <h2 className="text-2xl font-bold mb-8">
        {editJob ? "Edit Job" : "Post New Job"}
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <div>
          <label className="font-medium">Job Title</label>
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mt-2"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        <div>
          <label className="font-medium">Company</label>
          <input
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mt-2"
          />
          {errors.company && (
            <p className="text-red-500 text-sm mt-1">{errors.company}</p>
          )}
        </div>

        <div>
          <label className="font-medium">Location</label>
          <input
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mt-2"
          />
        </div>

        <div>
          <label className="font-medium">Salary</label>
          <input
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mt-2"
          />
        </div>

        <div>
          <label className="font-medium">Experience</label>
          <input
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mt-2"
          />
        </div>

        <div>
          <label className="font-medium">Employment Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mt-2"
          >
            <option>Full Time</option>
            <option>Part Time</option>
            <option>Internship</option>
            <option>Contract</option>
          </select>
        </div>

        <div>
          <label className="font-medium">Category</label>
          <input
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mt-2"
          />
        </div>

        <div>
          <label className="font-medium">Vacancies</label>
          <input
            type="number"
            name="vacancies"
            value={formData.vacancies}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mt-2"
          />
        </div>

        <div>
          <label className="font-medium">Work Mode</label>
          <select
            name="workMode"
            value={formData.workMode}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mt-2"
          >
            <option>Onsite</option>
            <option>Remote</option>
            <option>Hybrid</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="font-medium">Skills</label>
          <input
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mt-2"
            placeholder="React, Node.js, MongoDB"
          />
        </div>

        <div className="md:col-span-2">
          <label className="font-medium">Description</label>
          <textarea
            rows={3}
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mt-2"
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description}
            </p>
          )}
        </div>

        <div className="md:col-span-2">
          <label className="font-medium">Requirements</label>
          <textarea
            rows={3}
            name="requirements"
            value={formData.requirements}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mt-2"
          />
        </div>

        <div className="md:col-span-2">
          <label className="font-medium">Responsibilities</label>
          <textarea
            rows={3}
            name="responsibilities"
            value={formData.responsibilities}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mt-2"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition"
      >
        {editJob ? "Update Job" : "Publish Job"}
      </button>
    </form>
  );
};

export default JobForm;