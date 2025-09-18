const jwt = require('jsonwebtoken');

// dotenv: libreria para gestionar variables de entorno
// npm install dotenv

// .env
// importacion de la libreria 'dotenv'
require('dotenv').config({ quiet: true });

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
    expiresIn: '1m'
};

const token = jwt.sign(payload, process.env.KEYJWT, options);

console.log(`El TOKEN generado es: ${token}`);


// Verificar un token JWT, metodo 'verify()'

const tokenGenerado = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lUHJvZHVjdCI6IklwaG9uZSAxNyIsImlkUHJvZHVjdG8iOjUwMSwic2FsdWRvcyI6IkhvbGEgY29tbyBlc3RhcyIsImlhdCI6MTc1ODE2MDA4MywiZXhwIjoxNzU4MTYwMTQzfQ.StOf7Tk1bs0EdfB72y1iN8RP5JtkFjQqQqG0Lu4HIAs';

//const decodificar = jwt.verify(tokenGenerado, process.env.KEYJWT);
//console.log(`Token verificado: ${decodificar}`);

try {
    const carga = jwt.verify(tokenGenerado, process.env.KEYJWT);
    console.log('!!!!  EL TOKEN ES VALIDO FELICITACIONES !!!!!');
    console.log('La carga util (payload) del token es:');
    console.log(carga);
} catch (error) {
    console.log('*** EL TOKEN NO ES VALIDO ***');
}

// Decodificar carga util sin llave: metodo 'decode()':
//const cargaDecode = jwt.decode(tokenGenerado);
//console.log(cargaDecode);
