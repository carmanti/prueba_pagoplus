import Usuario from '../models/Usuario.js'
import bcrypt from 'bcrypt'

const postUsuario = async (req, res) => {
  const { nombre, apellido, email, password, repetirPassword } = req.body

  if (repetirPassword !== password) {
    return res.status(400).json({ mensje: 'Las contraseñas no coinciden' })
  }

  try {
    const usuarioEmail = await Usuario.findOne({ where: { email } })

    if (usuarioEmail) {
      return res
        .status(400)
        .json({ mensaje: 'El correo ya se encuentra registrado' })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const usuario = await Usuario.create({
      nombre,
      apellido,
      password: hashedPassword,
      email
    })

    res.status(201).json({ mensaje: 'Usuario creado correctamente', usuario })
  } catch (error) {
    console.log(error)
    res.status(500).json({ mensaje: 'Ocurrió un error' })
  }
}

const getUsuarioId = async (req, res) => {
  try {
    const { id } = req.params
    const usuario = await Usuario.findByPk(id)

    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' })
    }

    res.status(200).json(usuario)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'No se puede obtener ' })
  }
}

const putUsuario = async (req, res) => {
  try {
    const { id } = req.params
    const usuario = await Usuario.findByPk(id)
    if (!usuario) {
      return res.status(404).json({ message: 'No se encuentra el usuario' })
    }

    await Usuario.update({ activo: false }, { where: { id: id } })
    res.status(200).json({ message: 'Usuario Eliminado' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'No se puede acceder' })
  }
}

const deleteUsuario = async (req, res) => {}

export { postUsuario, getUsuarioId, putUsuario, deleteUsuario }
