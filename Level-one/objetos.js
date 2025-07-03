// Creacion  de un Objeto

let pc = {
    procesador: 'Intel',
    nucleos: 8,
    ram: '32 Gb',
    board: 'MSI',
    activo: true
};

// Acceso a Propiedades del Objeto

// Notacion de punto
console.log(pc.procesador);
console.log(pc.activo);

// Notacion de corchetes
console.log(pc['ram']);
console.log(pc['board']);

console.log(pc);
// Creacion de una propiedad
pc.grafica = false;
pc.ventiladores = 2;

console.log('*****************');
console.log(pc);

// Metodos en un Objeto

let nombre = 'Toby';

const dog = {
    nombre: 'Rex',
    edad: 10,
    raza: 'Pastor Aleman',
    saludarA() {
        console.log('guau guau');
    },
    saludarB: function () {
        console.log('guau guau');
    },
    printNombre() {
        console.log(this.nombre);
        console.log(nombre);
    }
};

dog.printNombre();


const cuadrado = {
    alto: 2,
    ancho: 4
};

console.log(cuadrado.alto * cuadrado.ancho);

// Recorrer un Objeto

const estudiante = {
    carrera: 'ingenieria',
    rama: 'Software',
    semestre: 2,
    pagosOk: true,
    jornada: 'Diurna',
    promedio: 4.5
};
/*
for (let i in estudiante) {
    console.log(i);
}*/

// Metodos de los Objetos

// Object.keys(): Devuelve un array con las claves de mi objeto

let claves = Object.keys(estudiante);
//console.log(claves);

// Object.values(): Devuelve un array con las valores de mi objeto

const valores = Object.values(estudiante);
//console.log(valores);

// Object.entries(): Devuelve un array con las parejas Clave:valor (keys:values)

const propiedadesCompletas = Object.entries(estudiante);
console.log(propiedadesCompletas);
console.log(propiedadesCompletas[4][0]);

