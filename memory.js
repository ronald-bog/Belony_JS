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

const nuevo = tareas.filter(nn => nn.id === 65);

nuevo[0].completada = true;

console.log(nuevo);
console.log('**********************************');
console.log(tareas);

// ejemplo 3
const pares = [66, 48, 100, 94, 200];

const parFiltrado = pares.filter(numero => numero === 100);

parFiltrado[0] = 102;

console.log(parFiltrado);
console.log(pares);

// ejemplo 4

const parejas = [[5, 6], [101, 104], [98, 45], [8, 4], [47, 74], [32, 24]];
const filtro = parejas.filter(elem => elem[1] === 45);
filtro[0][1] = 11;
console.log(parejas);
console.log(filtro);