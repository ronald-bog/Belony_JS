// indexOf: retorna el indice del elemento que se paso como argumento, 
const lenguajes = ['Javascript', 'Python', 'Java', 'C++'];
const retorno = lenguajes.indexOf('Java');
console.log(retorno);
console.log(lenguajes);

// slice: obtiene una porcion del array, no cambia el array.
const lenguajes2 = ['C', 'Php', 'Cobol', 'Pascal', 'Basic', "Rust"];
const subArray = lenguajes2.slice(1, 4);
console.log(subArray);
console.log(lenguajes2);

const subArray2 = lenguajes2.slice(2);
console.log(subArray2);

const subArray3 = lenguajes2.slice();
console.log(subArray3);

// Includes
const lenguajes3 = ['C', 'Php', 'Cobol', 'Pascal', 'Basic', "Rust"];
const resultado = lenguajes3.includes('Php');
console.log(resultado);

//join, separador es opcional se puede definir exm('-'), por defecto pone 'coma'
const lenguajesA = ['Javascript', 'Python', 'Java', 'C++'];
const arrString = lenguajesA.join('*');
console.log(arrString);


// iteracion de arrays
const autos = ['Honda', 'Toyota', 'Ford', 'Chevrolet', 'Dodge'];

//for tradicional
/*for (i = 0; i < autos.length; i++) {
    console.log(autos[i]);
}*/

//for...of
for (const j of autos) {
    console.log(j);
}

// while
/*j = 0;
while (j <= 4) {
    console.log(autos[j]);
    j++;
}*/

const vacio = [];
const lenguajesB = ['C', 'Php', 'Cobol', 'Pascal', 'Basic', "Rust", 'PL1', 'Fortran'];
console.log(vacio);
for (const x of lenguajesB) {
    vacio.push(x);
}
console.log(vacio);

