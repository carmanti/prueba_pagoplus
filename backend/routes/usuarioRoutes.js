import express from 'express'
import {
  deleteUsuario,
  getUsuarioId,
  postUsuario,
  putUsuario
} from '../controllers/usuarioController.js'

const usuarioRoutes = express.Router()

usuarioRoutes.post('/', postUsuario)
usuarioRoutes.get('/:id', getUsuarioId)
usuarioRoutes.put('/:id', putUsuario)
usuarioRoutes.put('/:id', deleteUsuario) // Se hace borrado lógico

export default usuarioRoutes
