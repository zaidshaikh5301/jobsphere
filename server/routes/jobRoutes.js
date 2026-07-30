import express from "express";

import {
  getJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
} from "../controllers/jobController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getJobs);

router.get("/:id", getJob);

router.post("/", protect, createJob);

router.put("/:id", protect, updateJob);

router.delete("/:id", protect, deleteJob);

export default router;