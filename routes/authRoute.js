import express from 'express'
import { login, registerController, test } from '../controller/authController.js'
import { isAdmin, requireSingIn } from '../middleware/authMiddleware.js'

//route obj
const router = express.Router()

//routing
router.post('/register', registerController)

//login
router.post('/login', login)


router.get('/test', requireSingIn, isAdmin, test)



export default router