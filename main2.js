const jwt = require('jsonwebtoken');

// dotenv: libreria para gestionar variables de entorno
// npm install dotenv

// .env
// importacion de la libreria 'dotenv' en versiones 17.2 +
require('dotenv').config({ quiet: true });

// Para versiones anteriores a la 17.2.2 de dotenv importar con: require('dotenv').config(); 

// Como llamar el archivo .env
// process.env.jwt_key

// Crear un token JWT, metodo 'sign()'
//const secreto = "b1234";

const payload = {
    nameProduct: "Iphone 17",
    idProducto: 501,
    saludos: "Hola como estas"
};

const options = {
    expiresIn: '1h'
};

const token = jwt.sign(payload, process.env.JWTKEY, options);

console.log(`El TOKEN generado es: ${token}`);
