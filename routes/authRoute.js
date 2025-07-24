import express from 'express'
import { registerController } from '../controller/authController.js'

//route obj
const router = express.Router()

//routing
router.post('/register', registerController)



export default router