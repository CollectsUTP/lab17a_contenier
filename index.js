// index.js - Mini WebApp con Express
const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Permitir servir archivos estáticos (CSS, JS, imágenes)
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal -> renderiza HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

// Ruta tipo API
app.get('/api', (req, res) => {
  res.json({ message: 'API funcionando correctamente 🚀' });
});

// Inicio del servidor
app.listen(PORT, () => {
  console.log(`🚀 Mini-App corriendo en http://localhost:${PORT}`);
});
