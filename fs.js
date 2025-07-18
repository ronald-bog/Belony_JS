const fs = require('fs');

//const archivo = 'Esto es una prueba de guarda archivo con writefile y CB';

const carro = {
    marca: 'Toyota',
    color: 'Rojo',
    year: 2025
};

const jsonCarro = JSON.stringify(carro);

// Escribir archivos Asincrono

//fs.writeFile('./prueba.json', jsonCarro, 'utf-8', () => console.log('Se guardo correctamente'));

//console.log('ESTE ES UN CL DESPUES DEL WRITEFILE');

/*
 fs.writeFile('./xx/prueba2.json', jsonCarro, 'utf-8', err => {
         if (err) {
             console.log(`ocurrio un error de codigo: ${err.errno}`);
        }
        else {
            console.log('Archivo guardado correctamente');
        } 

         console.log(err ? `ocurrio un error de codigo: ${err.errno}` : 'Archivo guardado correctamente'); 
    if (err) {
        console.log(`ocurrio un error de codigo: ${err.errno}`);
        return;
    }
    console.log('Archivo guardado correctamente');
});
*/

// Escribir archivos Sincronico

const sistemaSolar = [
    { planeta: 'Mercurio', composicion: 'Rocoso', ubicacion: '1' },
    { planeta: 'Saturno', composicion: 'Gaseoso', ubicacion: '6' },
    { planeta: 'Marte', composicion: 'Rocoso', ubicacion: '4' },
    { planeta: 'Venus', composicion: 'Rocoso', ubicacion: '2' },
];

const sistemaJS = JSON.stringify(sistemaSolar);

console.log('iniciando');

try {
    fs.writeFileSync('./planetas.json', sistemaJS, 'utf-8');
    console.log('Archivo guardado correctamente');
} catch (error) {
    console.log('se produjo un error al guardar el archivo');
}

console.log('este es el final del codigo');