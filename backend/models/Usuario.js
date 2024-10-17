import { DataTypes } from 'sequelize'
import db from '../config/db.js'

const Usuario = db.define('usuario', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: { msg: 'Email no válido' }
    },
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'El password no puede ir vacio'
      }
    }
  },
  token: DataTypes.STRING,
  activo: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
})

export default Usuario
