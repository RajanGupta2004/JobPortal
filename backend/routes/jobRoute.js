

import express from 'express'
import { getAdminJobs, getAllJobs, getJobById, postJob } from '../controllers/jobController.js'
import isAuthenticated from '../middleware/isAuthenticate.js'

const router = express.Router()


router.post("/post", isAuthenticated, postJob)
router.get("/getadminjobs", isAuthenticated, getAdminJobs)
router.get("/get", isAuthenticated, getAllJobs)
router.get("/get/:id", isAuthenticated, getJobById)


export default router