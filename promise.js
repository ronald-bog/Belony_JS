// Promesas
const nombreA = 'Ana';
//console.log(nombreA);
const autos = [
    { marca: 'kia', year: 2025, puertas: 4, color: 'Blanco' },
    { marca: 'Renault', year: 2024, puertas: 5, color: 'Rojo' },
    { marca: 'GMC', year: 2024, puertas: 4, color: 'Azul' },
    { marca: 'Toyota', year: 2015, puertas: 4, color: 'Verde' }
];

function listarAutos() {
    setTimeout(() => {
        return autos;
    }, 5000);
}

//console.log(listarAutos());
const nombre = 'Roger';
//console.log(nombre);

function listarAutosPromesa() {
    const autosPromesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(autos);
        }, 5000);
    });
    return autosPromesa;
}

//console.log(listarAutosPromesa());

// then(), catch(), finally()

listarAutosPromesa()
    .then(res => console.log(res))
    .catch(() => console.log('Salio MALLLLLLLLLLLLLLLLLLLLLLLL'))
    .finally(() => console.log('Esto es del finally'))

