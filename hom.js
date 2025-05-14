// METODOS DE ORDEN SUPERIOR (Higher-order methods HOM)*** Aplicables a los Arrays

// forEach
/* sintaxis:

array.forEach(callback(valor actual, indice(opcional), array(opcional))=>{cuerpo de la funcion})

*/

const numeros = [8, 9, 10, 20, 30];

//numeros.forEach(i => console.log(i));

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