// METODOS DE ORDEN SUPERIOR (Higher-order methods HOM)*** Aplicables a los Arrays

// forEach
/* sintaxis:

array.forEach(callback(valor actual, indice(opcional), array(opcional))=>{cuerpo de la funcion})

No crea ni retorna estructuras
*/

const numeros = [8, 9, 10, 20, 30];

numeros.forEach(i => console.log(i));

/*
function pares() {
    for (const z of numeros) {
        z % 2 === 0 ? console.log(z) : null;
    }
}
pares();
*/

//numeros.forEach(z => z % 2 === 0 ? console.log(z) : null);
numeros.forEach((valor, index, arreglo) => console.log(`valor: ${valor}, indice: ${index}, arreglo: ${arreglo}`));


const notas = [4.5, 3.2, 5.5, 6.0, 8, 6.5];

function promedio() {
    let total = 0;
    notas.forEach(vr => total += vr);
    console.log(total / notas.length);
}

promedio();


// map

/* sintaxis:

array.map(callback(valor actual, indice(opcional), array(opcional))=>{cuerpo de la funcion})

Crea un array con el resultado
*/

const numbers = [9, 8, 7, 6, 5];

//const nuevoArray = numbers.map(numero => numero * 2);
//numbers.forEach((numero, i) => console.log(`${i + 1}. ${numero * 2}`));
const nuevoArray = numbers.map((numero, i) => `${i + 1}. Resultado = ${numero * 2}`);

console.log(nuevoArray);

// filter
/*
    sintaxis:
    array.filter(callback(valor actual, indice(opcional), array(opcional)=>{
        Bloque de codigo
        })
*/

const autos = ['Jeep', 'Honda', 'Ford', 'BUICK', 'Renault', 'Ferrari'];

const autosFiltrados = autos.filter(auto => auto[0] === 'F');
const filtrados = autos.filter(auto => auto.startsWith('F'));
console.log(autosFiltrados);
console.log(filtrados);

const temperaturas = [5, -12, 35, 40, 18, -10];

const bajoCero = temperaturas.filter(temp => temp < 0);

const calidas = temperaturas.filter(t2 => t2 >= 25);

const tibias = temperaturas.filter(t => t >= 0 && t < 25);

console.log(bajoCero);
console.log(calidas);
console.log(tibias);

/* Diferencia entre igualdad estricta y normal
const a = 5;
const b = '5';

console.log(a == b);
console.log(a === b);
*/

// Metodo de los strings (split)
const auto = 'Ford&1990&rojo';

const arreglo = auto.split("&");

console.log(arreglo);

const [marca, anio, color] = arreglo;
console.log(marca);
console.log(anio);
console.log(color);