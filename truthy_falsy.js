// FALSY en JS

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(false));
console.log(Boolean(null));
console.log(Boolean(""));

// TRUTHY
// Todos lo que no son falsy

console.log(Boolean(" "));


const tareas = [{ id: 1, completado: false }, { id: 2, completado: false }];
const id = 1;
const Tarea = tareas.find((y) => y.id === id);

if (Tarea) {
    console.log(`SI existe en el arreglo`);
}
else {
    console.log(`NO existe en el arreglo`);
}

let prueba = 0;
if (prueba) {
    console.log("Se imprime BLOQUE IF");
}

console.log(prueba);