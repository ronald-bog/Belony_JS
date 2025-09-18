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
        const token = jwt.sign(payload, process.env.KEYJWT, { expiresIn: '2m' });
        res.status(200).json({ token: token });
    } else {
        res.status(401).json({ message: 'Credenciales invalidas' });
    }
});

app.listen(3000, () => console.log('Server OK!!!'));