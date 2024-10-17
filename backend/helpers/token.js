import jwt from 'jsonwebtoken'

// Genera token jwt
const generateJWT = (id, { nombre }) =>
  jwt.sign({ id, nombre }, process.env.JWT_SECRET, {
    expiresIn: '1d'
  })

const generateId = () =>
  Math.random().toString(32).substring(2) + Date.now().toString(32)

export { generateId, generateJWT }
