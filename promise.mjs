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

function listarAutosPromesa2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(autos);
        }, 5000);
    });
}

function listarAutos3() {
    const autoPromesa = new Promise((resolve, reject) => {
        const resultado = false;
        if (resultado) {
            setTimeout(() => {
                resolve(autos);
            }, 5000);
        } else {
            reject([]);
        }
    });
    return autoPromesa;
}

//onsole.log(listarAutosPromesa());

// then(), catch(), finally()

/* listarAutosPromesa()
    .then(res => console.log(res))
    .catch(() => console.log('Salio MALLLLLLLLLLLLLLLLLLLLLLLL'))
    .finally(() => console.log('Esto es del finally')) */

/* listarAutosPromesa2()
    .then(res => console.log(res)); */
/*
listarAutos3()
    .then(res => console.log(res))
    .catch(rej => console.log(rej))
    .finally(() => console.log('Esto es del finally'));

*/

// Async Await

async function generarAutos() {
    try {
        const autosRes = await listarAutos3();
        console.log(autosRes);
        return autosRes;
    } catch (error) {
        console.log('Error');
    }
}

//generarAutos();


//top-level await

const colores = ['rojo', 'azul', 'blanco', 'negro', 'verde', 'gris'];

function leerColores() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(colores);
        }, 3000);
    });
}

function leerColores2() {
    return new Promise((resolve, reject) => {
        let ok = true;
        if (ok) {
            setTimeout(() => {
                resolve(colores);
            }, 5000);
        } else {
            reject('ERROR');
        }
    });
}

const result = await leerColores2();
console.log(result);




