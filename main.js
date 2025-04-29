// Github: BEXzoe

// Arrays

const numeros = [200, 100, 500, 700];

// acceder a un elemento del array
//console.log(numeros[2]);

// cambiar elemento del array
numeros[3] = 400;

// Ver longitud del array
console.log(numeros.length);

// push : agrega al final, retona la nueva longitud del array
const paises = ['Belize', 'Mexico', 'Colombia', 'Guatemala'];
const retornoPush = paises.push('Salvador');
console.log(paises);
console.log(retornoPush);

// unshift: agrega al principio
const paises2 = ['Belize', 'Mexico', 'Colombia', 'Guatemala'];
const retornoPush2 = paises2.unshift('Salvador');
console.log(paises2);
console.log(retornoPush2);

// pop: elimina al final, retornan el elemento que elimino 
const colores = ['Azul', 'Blanco', 'Negro', 'Verde'];
const retornoPop = colores.pop();
console.log(colores);
console.log(retornoPop);

// shift: elimina al comienzo, retornan el elemento que elimino 
const colores2 = ['Azul', 'Blanco', 'Negro', 'Verde'];
const retornoPop2 = colores2.shift();
console.log(colores2);
console.log(retornoPop2);

//splice ****** eliminar, agregar, reemplazar

// splice para eliminar elementos (o 1 o 2 argumentos), retorna un array con elemento eliminado
const planetas = ['Mercurio', 'Venus', 'Tierra', 'Marte'];
const planetaEliminado = planetas.splice(1, 2);
console.log(planetas);
console.log(planetaEliminado);

// splice para agregar elementos
const planets = ['Jupiter', 'Saturno'];
planets.splice(1, 0, 'Urano', 'Neptuno');
console.log(planets);

// splice para reemplazar
const lunas = ['Luna', 'Titan', 'Io', 'Encelado'];
const reemplazo = lunas.splice(1, 2, 'Calixto', 'Europa');
console.log(lunas);
console.log(reemplazo);








































