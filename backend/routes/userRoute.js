import express from 'express'

import { login, register } from '../controllers/userController.js'



const router = express.Router()


router.post("/register", register)
router.post("/login", login)
// router.post("/profile/update", updateprofile)


export default router