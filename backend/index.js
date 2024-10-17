// index.js
import 'dotenv/config'
import express from 'express'
import db from './config/db.js'
import appRoutes from './routes/appRoutes.js'
import cors from 'cors'

// Sincronizar la base de datos y crear las tablas
const syncDatabase = async () => {
  try {
    await db.sync({ force: false }) // Cambia 'true' a 'false' para no eliminar las tablas existentes
    console.log('Tablas creadas correctamente')
  } catch (error) {
    console.error('Error al crear tablas:', error)
  }
}

const app = express()
const port = process.env.PORT || 3000
const url = '/api/v1'

app.use(cors())

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Configura las rutas
app.use(url, appRoutes)

// Verificar conexión a la base de datos
db.authenticate()
  .then(() => {
    console.log('Conexión a la base de datos establecida correctamente')
    return syncDatabase() // Sincronizar después de autenticar
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Servidor corriendo en el puerto ${port}`)
    })
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error)
  })
