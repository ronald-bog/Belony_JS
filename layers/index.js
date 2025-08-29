const express = require('express');
const app = express();
const usuariosController = require('./src/controllers/usuariosController');
const PORT = 3000;

app.get('/usuarios', usuariosController.getAllUsuarios);

app.listen(PORT, () => {
    console.log(`Server running in port: ${PORT}`);
});