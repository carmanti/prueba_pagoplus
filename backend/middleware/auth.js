import jwt from 'jsonwebtoken'

const auth = (req, res, next) => {
  // Autorización a través del encabezado
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({ message: 'No autenticado, no hay un JWT' })
  }

  // Obtener el token
  const token = authHeader.split(' ')[1]

  let decodedToken
  try {
    decodedToken = jwt.verify(token, process.env.JWT_SECRET)
  } catch (error) {
    return res.status(500).json({ message: 'Error al verificar el token' })
  }

  // Si el token es válido, pero hay otro error
  if (!decodedToken) {
    return res.status(401).json({ message: 'No autenticado' })
  }

  req.usuario = decodedToken
  next()
}

export default auth
