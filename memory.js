// Almacenamiento por valor (Stack)
let a = 1;
let b = a;
b = 3;
console.log(a);
console.log(b);

let nombre = "Michael";
let otroNombre = nombre;

otroNombre = "Madonna";

console.log(nombre);
console.log(otroNombre);

// Datos por referencia (referencia=stack, valor=heap)

// ejemplo 1
let numeros = [15, 5, 6];
//let nuevoArr = numeros; // copia superficial
let nuevoArr = [...numeros]; //copia profunda
//console.log(numeros);
//console.log(nuevoArr);

nuevoArr.push(200);

console.log(numeros);
console.log(nuevoArr);

// ejemplo 2
const tareas = [
    { id: 5, descripcion: "cantar", completada: false },
    { id: 10, descripcion: "dormir", completada: false },
    { id: 65, descripcion: "bailar", completada: false },
    { id: 4, descripcion: "correr", completada: false },
];

tareas[2].completada = true;
console.log(tareas);