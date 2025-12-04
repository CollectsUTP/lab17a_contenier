// index.js - servidor Express mínimo
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Hola desde Render + Docker!' });
});

app.listen(PORT, () => {
  console.log(`App escuchando en puerto ${PORT}`);
});
