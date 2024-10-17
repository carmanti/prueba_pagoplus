import { generateJWT } from '../helpers/token.js'
import Usuario from '../models/Usuario.js'
import bcrypt from 'bcrypt'

const postLogin = async (req, res) => {
  try {
    const { email, password } = req.body

    const usuario = await Usuario.findOne({ where: { email } })

    if (!usuario) {
      return res.status(404).json({ message: 'El usuario no existe' })
    }
    if (!usuario.activo) {
      return res.status(404).json({ message: 'El usuario no está activo' })
    }

    const correctPassword = bcrypt.compareSync(password, usuario.password)

    if (!correctPassword) {
      return res.status(404).json({ message: 'Contraseña Incorrecta' })
    }

    const token = generateJWT(usuario.isSoftDeleted, usuario.nombre)

    res.status(200).json(token)
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ mensaje: 'No se puede iniciar sesión error interno' })
  }
}

export { postLogin }
