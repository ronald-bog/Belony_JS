const http = require("http");
const PORT = 3001;
//const fs = require("fs").promises;
const url = require("url");

const server = http.createServer((req, res) => {
    const parseUrl = url.parse(req.url, true);
    const path = parseUrl.pathname; //string "/usuarios/3"
    const arrPathName = path.split("/"); // Arreglo ["", "usuarios", "3"]
    const id = arrPathName[2]; // 3
    const nombreEndpoint = `/${arrPathName[1]}`; // "usuarios"
    console.log(parseUrl);
    console.log(path);
    console.log(arrPathName);
    console.log(id);
    console.log(nombreEndpoint);


    if (req.method === "POST" && nombreEndpoint === "/usuarios") {
        res.end("Creacion de usuarios");
    }
    else if (
        req.method === "GET" &&
        id !== undefined &&
        nombreEndpoint === "/usuarios"
    ) {
        res.end("Obtener la informacion de solo un usuario mediante un Id ");
    } else if (req.method === "GET" && nombreEndpoint === "/usuarios") {
        res.end("listado de todos los usuarios ");
    } else if (req.method === "PUT" && nombreEndpoint === "/usuarios") {
        res.end("este Endpoint realiza edicion de usuario ");
    } else if (req.method === "DELETE" && nombreEndpoint === "/usuarios") {
        res.end("Eliminacion de un usuario");
    } else {
        res.writeHead(404);
        res.end("El Endpoint no existe ");
    }
});

server.listen(PORT, () => {
    console.log(`servidor ejecutandose en el puerto ${PORT}`);
});

