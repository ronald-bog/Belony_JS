const express = require('express');
const app = express();
const PORT = 3000;

app.get('/pruebas', (req, res) => {
    console.log('Llego una peticion GET');
    res.end();
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
});