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

const dog = {
    nombre: 'Rex',
    edad: 10,
    raza: 'Pastor Aleman',
    saludarA() {
        console.log('guau guau');
    },
    saludarB: function () {
        console.log('guau guau');
    }
};

dog.saludarA();