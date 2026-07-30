import express from "express";

import protect from "../middleware/authMiddleware.js";

import {
  applyJob,
  getMyApplications,
  getJobApplications,
  updateApplicationStatus,
} from "../controllers/applicationController.js";

const router = express.Router();

router.post("/", protect, applyJob);

router.get("/my", protect, getMyApplications);

router.get("/job/:jobId", protect, getJobApplications);

router.put("/:id", protect, updateApplicationStatus);

export default router;