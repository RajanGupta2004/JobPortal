import express from 'express'
import { companyRegister, getCompany, getCompanyById, updateCompany } from '../controllers/companyController.js'
import isAuthenticated from '../middleware/isAuthenticate.js'


const router = express.Router()


router.post("/register", isAuthenticated, companyRegister)
router.get("/get", isAuthenticated, getCompany)
router.get("/get/:id", isAuthenticated, getCompanyById)
router.put("/update/:id", isAuthenticated, updateCompany)


export default router