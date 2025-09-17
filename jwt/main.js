const jwt = require('jsonwebtoken');

// Crear un token JWT, metodo 'sign()'
const secreto = "b1234";

const payload = {
    nameProduct: "Iphone 17",
    idProducto: 501,
    saludos: "Hola como estas"
};

const options = {
    expiresIn: '1h'
};

const token = jwt.sign(payload, secreto, options);

console.log(`El TOKEN generado es: ${token}`);


// Verificar un token JWT, metodo 'verify()'

const tokenGenerado = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lUHJvZHVjdCI6IklwaG9uZSAxNyIsImlkUHJvZHVjdG8iOjUwMSwic2FsdWRvcyI6IkhvbGEgY29tbyBlc3RhcyIsImlhdCI6MTc1ODA3NTkzMiwiZXhwIjoxNzU4MDc5NTMyfQ.vujNMV2MWiZOLGn6wt1UJ6t9L5-95bM_tNrUhfV19SM';

const decodificar = jwt.verify(tokenGenerado, secreto);
console.log(`Token verificado: ${decodificar}`);

try {
    const carga = jwt.verify(tokenGenerado, secreto);
    console.log('!!!!  EL TOKEN ES VALIDO FELICITACIONES !!!!!');
    console.log('La carga util (payload) del token es:');
    console.log(carga);
} catch (error) {
    console.log('*** EL TOKEN NO ES VALIDO ***');
}


// Decodificar carga util sin llave: metodo 'decode()':
const cargaDecode = jwt.decode(tokenGenerado);
console.log(cargaDecode);
