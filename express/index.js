const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/usuarios', (req, res) => {
    const cuerpo = req.body;
    console.log(typeof cuerpo);
    res.end();
});

app.post('/pruebas', (req, res) => {
    const cuerpo = req.body;
    console.log(cuerpo);
    res.write('Esta es la primera linea\n');
    res.write('Esta es la segunda linea\n');
    res.write('Esta es la tercera linea\n');
    res.end('La respuesta esta completa y finalizada');
});

app.post('/qp', (req, res) => {
    const { nombre, profesion } = req.query; // desestructuracion
    /*const datos = req.query; // Objeto
    const nombre = datos.nombre
    const profesion = datos.profesion*/
    res.end('Finalizada');
});

app.post('/p/:zz', (req, res) => {
    const numero = parseInt(req.params.zz);
    console.log(numero);
    res.end('Finalizada');
});

app.get('/pruebas', (req, res) => {
    res.write('Esta es la primera linea\n');
    res.write('Esta es la segunda linea\n');
    res.write('Esta es la tercera linea\n');
    res.end('La respuesta esta completa y finalizada');
});

app.get('/send', (req, res) => {
    const usuario = { nombre: 'Roger', edad: 45 };
    res.send(usuario);
});

app.get('/json', (req, res) => {
    res.json({ nombre: 'Belony', profesion: 'Engineer' });
});

app.use((req, res) => {
    res.status(404);
    res.end('El endpoint que digitaste no existe');
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
});