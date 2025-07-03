// Operador Rest (...NombreVar)

function numeros(...x) {
    return x;
}

//console.log(numeros('Belony', 'Jonas', 'Ana'));

function listar(...nombres) {
    nombres.forEach(nombre => console.log(nombre));
}

//listar('Jhon', 'Jessica', 'Belony', 'Jonas', 'Ana')

function describirPersona(nombre, edad, ...hobbies) {
    console.log(`Nombre: ${nombre}`);
    console.log(`Edad: ${edad}`);
    console.log(`Hobbies: ${hobbies.join(', ')}`);
}

describirPersona('Jhon', 20, 'Leer', 'Jugar Play S', 'Ver TV', 'Chatear en whatsapp');


// Operador Spread (...)

const numbers = [1345, 89, 65];
console.log(numbers);
console.log(...numbers);

const nums = [20, 40, 60];
function sumar(r, t, y) {
    return r + t + y;
}
console.log(sumar(...nums));

const numPares = [8, 20, 32, 68];

const maximo = Math.max(...numPares);
console.log(maximo);

const numImpares = [1001, 57, 325, 9, 98, 23, 45];
const copia = [...numImpares]; //spread

//const [num1, num2, ...num3] = numImpares // Rest

console.log(numImpares);
console.log(copia);


const array1 = ['x', 'y', 'z'];
const array2 = ['m', 'n', 'o'];

const newArray = [...array1, ...array2];

console.log(newArray);

const nums1 = [10, 20, 30];
const nums2 = nums1; // copia superficial shallow copy
const nums3 = [...nums1]; // copia profunda deep copy

nums1[1] = 19;

console.log(nums1);
console.log(nums2);
console.log(nums3);

// copia de objetos con spread 

const estudiante = {
    nombre: 'Belony',
    edad: 30
};

const copiaEstudiante = { ...estudiante };

console.log(estudiante);
console.log(copiaEstudiante);

const datosEstudio = {
    lenguaje: 'Javascript',
    nivel: 'Basico'
};

const informacionTotalEstudiante = { ...copiaEstudiante, ...datosEstudio };

console.log(informacionTotalEstudiante);

const estudent = {
    materias: [],
    agregarMateria(materia) {
        materia.forEach(x => this.listaMaterias.push(x));
    }
};

console.log(estudent.materias);

const nuevas = ['Javascript', 'Algoritmos', 'Grafos', 'Estructuras de datos', 'control de versiones', 'Lenguajes', 'Tipado', 'Bases de datos', 'Calculo', 'Maquinas'];
estudent.agregarMateria(nuevas);

console.log(estudent.materias);


