// HTTP

const http = require('http');

// Creacion de servidor

const server = http.createServer((req, res) => {
    console.log(req.url);
});

server.listen(3000, () => {
    console.log('Servidor ejecutandose correctamente en puerto 3000');
});
