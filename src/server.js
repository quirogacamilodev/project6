const express = require('express');
const app = express();
const User = require('./models/user');

// ...

app.post('/usuarios', (req, res) => {
  const { username, email, password } = req.body;

  const newUser = new User({
    username,
    email,
    password
  });

  newUser.save()
    .then(() => {
      res.send('Usuario creado exitosamente');
    })
    .catch((error) => {
      res.status(500).send('Error al crear el usuario');
    });
});
