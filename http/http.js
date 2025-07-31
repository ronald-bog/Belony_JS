// HTTP
/*
const http = require('http');

// Creacion de servidor

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.writeHead(201, { 'content-type': 'text/plain' });
    res.write('HOLA MUNDO\n');
    res.write('Hola tierr\n');
    res.write('HOLA...........\n');
    res.end('Finalizado');
});

server.listen(3000, () => {
    console.log('Servidor ejecutandose correctamente en puerto 3000');
});
*/


// Manejo de Recursos (rutas, endpoints)


const http = require('http');
const PORT = 3001;

const server = http.createServer((req, res) => {
    if (req.url === '/test') {
        res.write('Ingresaste al recurso * TEST * ');
    } else if (req.url === '/user') {
        res.writeHead(201);
        res.write('Ingresaste al recurso * USER * ');
    } else if (req.url === '/about') {
        res.write('Soy una API Rest encargada de hacer pruebas ');
    } else {
        res.writeHead(404);
        res.write('404 ruta no encontrada');
    }
    res.end();

});

server.listen(PORT, () =>
    console.log(`Servidor ejecutandose correctamente en puerto ${PORT}`)
);
