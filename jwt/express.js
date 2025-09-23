const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config({ quiet: true });

const app = express();
app.use(express.json());
const usuario = "ronald";
const password = 987654;
const payload = {
    nombre: "Ronald Espitia"
};

app.post('/login', (req, res) => {
    const { username, pass } = req.body;

    if (username === usuario && pass === password) {
        // crear el token
        const token = jwt.sign(payload, process.env.KEYJWT, { expiresIn: '5m' });
        res.status(200).json({ message: "Autenticacion satisfactoria", token: token });
    } else {
        res.status(401).json({ message: 'Credenciales invalidas' });
    }
});

app.get('/protected', (req, res) => {
    const { authorization } = req.headers; // Obtener token de los headers (bearer token)
    const token = authorization.split(" ")[1]; // Separar el token

    try {
        const verificacion = jwt.verify(token, process.env.KEYJWT);
        const mtos = listadoMovimientos();
        res.json({ message: "Acceso permitido", user: verificacion, resListMov: mtos });
    } catch (error) {
        res.status(401).json({ message: 'TOKEN INVALIDO' });
    }
});

function listadoMovimientos() {
    return "Accediste al modulo de movimientos";
}

app.listen(3002, () => console.log('Server OK!!!'));