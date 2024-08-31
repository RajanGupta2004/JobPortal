


import express from 'express'
import { applyJob, getApplicants, getAppliedJobs, updateStatus } from '../controllers/applicantController.js'
import isAuthenticated from '../middleware/isAuthenticate.js'


const router = express.Router()

router.post("/apply/:id", isAuthenticated, applyJob)
router.get("/get", isAuthenticated, getAppliedJobs)
router.get("/:id/applicants", isAuthenticated, getApplicants)
router.get("/status/:id/update", isAuthenticated, updateStatus)



export default router


