import express from 'express'
import { login, registerController } from '../controller/authController.js'

//route obj
const router = express.Router()

//routing
router.post('/register', registerController)

//login
router.post('/login', login)



export default router