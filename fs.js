const fs = require('fs');

//const archivo = 'Esto es una prueba de guardar archivo con writefile y CB';

const carro = {
    marca: 'Toyota',
    color: 'Rojo',
    year: 2025
};

const jsonCarro = JSON.stringify(carro);

fs.writeFile('./prueba.json', jsonCarro, () => console.log('Se guardo correctamente'));

console.log('ESTE ES UN CL DESPUES DEL WRITEFILE');