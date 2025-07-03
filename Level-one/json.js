// JSON

// Objeto de JS
const persona = { nombre: "Belony", edad: 30, activo: true };

// Convertir Objeto JS a JSON, metodo JSON.stringify(objeto)

const conversion = JSON.stringify(persona);

//console.log(persona);
//console.log(conversion);

const persona2 = {
    nombre: 'Tony',
    edad: 45,
    activo: false,
    estatura: 1.95,
    hobbies: ['Futbol', 'Play', 'Nadar'],
    saludar() { console.log('Hola'); }
};

let nuevoJson = JSON.stringify(persona2);

//console.log(persona2);
//console.log('-----------------------------------');
//console.log(nuevoJson);

const usuarios = [
    { id: 105, username: 'Alfa5421', active: true },
    { id: 314, username: 'Sistemas2', active: true },
    { id: 98, username: 'Contab5', active: false },
    { id: 5412, username: 'Admin1', active: true },
    { id: 107, username: 'Beta45', active: true },
    { id: 101, username: 'Omega', active: false },
];

console.log(typeof usuarios);

const userJson = JSON.stringify(usuarios);
//console.log(userJson);

// Convertir JSON a un Objeto JS, metodo JSON.parse(objeto)

//const jsonStr = '{"id":105,"username":"Alfa5421"}';

let result = JSON.parse(userJson);

console.log(result);