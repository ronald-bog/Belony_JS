const http = require('http');
const url = require('url');
const PORT = 3000;

const server = http.createServer((req, res) => {
    const parseUrl = url.parse(req.url, true);
    const path = parseUrl.pathname;
    const queryParams = parseUrl.query;

    if (req.method === 'POST' && path === '/users') {
        let body = '';
        req.on('data', chunk => {
            //body = body + chunk
            body += chunk;
        });
        req.on('end', () => {
            try {
                const objData = JSON.parse(body);
                console.log('El Json recibido contiene:', objData);
                //res.write('El json que enviaste fue recibido exitosamente');
                res.end('El json que enviaste fue recibido exitosamente');
            } catch (error) {
                console.log('Error al procesar JSON');
                res.end('El json no se pudo procesar en el backend');
            }
        });

    } else if (path === '/testurl') {
        //console.log(queryParams);
        //console.log(queryParams.nombre);

        let nombreRecibido = queryParams.nombre;
        let edadRecibido = parseInt(queryParams.edad) + 10;
        console.log(nombreRecibido);
        console.log(edadRecibido);



        // const ur = 'http://localhost:3000/testurl/prueba?nombre=Roger';
        // const parseo = url.parse(ur, true);
        // console.log(parseo);

    }
    else if (path === '/2') {
        res.write('respuesta2');
    }
    else if (path === '/3') {

    } else {

    }

});

server.listen(PORT, () =>
    console.log(`Servidor ejecutandose correctamente en puerto ${PORT}`)
);
