import express from 'express'
import usuarioRoutes from './usuarioRoutes.js'

const appRoutes = express.Router()

appRoutes.use('/usuarios', usuarioRoutes)

export default appRoutes
