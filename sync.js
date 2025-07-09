
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
