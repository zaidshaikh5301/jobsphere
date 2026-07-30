import axios from "axios";
import { data } from "react-router-dom";

const API = "http://localhost:5000/api/jobs";

// Get All Jobs
export const getAllJobs = async () => {
  const response = await axios.get(API);
  
  return response.data;
};

// Get Single Job
export const getJobById = async (id) => {
  const response = await axios.get(`${API}/${id}`);
  return response.data;
};

// Create Job
export const createJob = async (jobData) => {
  const response = await axios.post(API, jobData);
  return response.data;
};

// Update Job
export const updateJob = async (id, jobData) => {
  const response = await axios.put(`${API}/${id}`, jobData);
  return response.data;
};

// Delete Job
export const deleteJob = async (id) => {
  const response = await axios.delete(`${API}/${id}`);
  return response.data;
};