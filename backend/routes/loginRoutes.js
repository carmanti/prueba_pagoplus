import express from 'express'
import { postLogin } from '../controllers/loginController.js'
const loginRoutes = express.Router()

loginRoutes.use('/', postLogin)

export default loginRoutes
