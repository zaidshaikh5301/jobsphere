import Application from "../models/Application.js";

// ==========================
// Apply for a Job
// ==========================
export const applyJob = async (req, res) => {
  try {
    const { job, resume, coverLetter } = req.body;

    if (!job) {
      return res.status(400).json({
        success: false,
        message: "Job ID is required.",
      });
    }

    // Check if the user has already applied
    const existingApplication = await Application.findOne({
      candidate: req.user._id,
      job,
    });

    if (existingApplication) {
      return res.status(400).json({
        success: false,
        message: "You have already applied for this job.",
      });
    }

    const application = await Application.create({
      candidate: req.user._id,
      job,
      resume,
      coverLetter,
    });

    res.status(201).json({
      success: true,
      message: "Application submitted successfully.",
      application,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ==========================
// Get Logged-in User Applications
// ==========================
export const getMyApplications = async (req, res) => {
  try {

    const applications = await Application.find({
      candidate: req.user._id,
    })
      .populate("job")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: applications.length,
      applications,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ==========================
// Get Applications for a Specific Job
// ==========================
export const getJobApplications = async (req, res) => {
  try {

    const applications = await Application.find({
      job: req.params.jobId,
    })
      .populate("candidate", "-password")
      .populate("job");

    res.status(200).json({
      success: true,
      count: applications.length,
      applications,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ==========================
// Update Application Status
// ==========================
export const updateApplicationStatus = async (req, res) => {
  try {

    const { status } = req.body;

    const application = await Application.findById(req.params.id);

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found.",
      });
    }

    application.status = status;

    await application.save();

    res.status(200).json({
      success: true,
      message: "Application status updated successfully.",
      application,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};