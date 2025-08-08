
console.log('A');
x();
function x() {
    for (let i = 0; i < 10000000000; i++) {
    }
    console.log('ejecutando funcion X');
}

console.log('B');
y();

function y() {
    console.log('ejecutando funcion Y');
}

console.log('C');




// const csv = `NOMBRE;APELLIDO;EDAD\nJohn; Doe; 25\nJames; Gosling; 80\nGuido;Van Rossum; 70\nBrendan; Eich; 60\nGeorge; Boole; 210`;

const csv = 'NOMBRE;APELLIDO;EDAD\nJohn; Doe\nJames;Gosling\nGuido;Van Rossum\nBrendan; Eich\nGeorge;Boole';

const parseo = csv.split('\n');
//console.log(parseo);

let matriz = [];
for (let index = 0; index < parseo.length; index++) {
    matriz.push(parseo[index].split(';'));
}
console.log(matriz);

const csv2 = 'NOMBRE;EDAD\nJohn;25\nJames;80\nGuido;70\nBrendan;60\nGeorge;210';
const parseo2 = csv2.split('\n');

let matriz2 = [];
for (let index = 0; index < parseo2.length; index++) {
    matriz2.push(parseo2[index].split(';'));
}
console.log(matriz2);


const result = matriz[1][0] === matriz2[2][0];
console.log(result);

if (result) {
    console.log(matriz2[1][1]);
} else {
    console.log('N\\A');
}


for (const e of matriz2) {
    if (e[0] === 'James') {
        //console.log(e[1]);
        matriz[2].push(e[1]);
    } else {
        console.log('N\\A');
    }
}

console.log(matriz);
