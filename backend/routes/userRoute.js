import express from 'express'

import { login, logout, register, updateProfile } from '../controllers/userController.js'
import isAuthenticated from '../middleware/isAuthenticate.js'



const router = express.Router()


router.post("/register", register)
router.post("/login", login)
router.post("/profile/update", isAuthenticated, updateProfile)
router.post("/logout", logout)


export default router