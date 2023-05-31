const mongoose = require('mongoose');

// Definición del esquema del usuario
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String
});

// Creación del modelo de usuario
const User = mongoose.model('User', userSchema);

// Exportación del modelo de usuario
module.exports = User;
