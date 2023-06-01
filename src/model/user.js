import { Schema, model } from 'mongoose';

// Definición del esquema del usuario
const userSchema = new Schema({
  username: String,
  email: String,
  password: String
});

// Creación del modelo de usuario
const User = model('User', userSchema);

// Exportación del modelo de usuario
export default User;
