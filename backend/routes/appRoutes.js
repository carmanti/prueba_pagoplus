import express from 'express'
import usuarioRoutes from './usuarioRoutes.js'
import loginRoutes from './loginRoutes.js'

const appRoutes = express.Router()

appRoutes.use('/usuarios', usuarioRoutes)
appRoutes.use('/login', loginRoutes)

export default appRoutes
