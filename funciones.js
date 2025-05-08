// Funciones declaradas

// void: No retorna nada al resto codigo
function saludar() {
    console.log('Hola Belony');
}
const a = saludar();
console.log(a); // retorna undefined

// Funcion con retorno

function despedir() {
    return "bye bye";
}

let despedida = despedir();
console.log(despedida);

// parametros Primitivos

function sumar(num1, num2) {
    const a = num1;
    const b = num2;
    //num2 = num1;
    console.log(a + b);
}

sumar(2, 3);

// Parametros Defecto

function parametroDef(a = 0, b = 0) {
    console.log(a);
    console.log(b);
};

parametroDef(5);

function parametros(x = 11, y, z = 100) {
    console.log(x);
    console.log(y);
    console.log(z);
};

parametros(18, 12, 354654);

// Parametros Rest

const z = true;
console.log(typeof z);

function colorear(...colores) {
    //console.log(typeof colores); object
    for (const i of colores) {
        console.log(i);
    }
}

colorear('amarillo', 'azul', 'rojo');

/*
const paises = ['Belize', 'Mexico', 'Peru'];

function world(x) {
    console.log(x);
}

world(paises);
*/

function suma(...numeros) {
    let total = 0;
    for (const i of numeros) {
        total += i;
    }
    return total;
}

function suma1(...numeros) {
    let total = 0;
    for (const i of numeros) {
        total += i;
    }
    console.log(total);
}

let total = 0;
function suma2(...numeros) {
    for (const i of numeros) {
        total += i;
    }
    console.log(total);
}

let totalA;  // Esta variable es de tipo undefined
function suma3(...numeros) {
    for (const i of numeros) {
        totalA += i;
    }
    console.log(totalA);
}
suma3(10, 5, 8);

//console.log(suma(10, 5, 8));
//suma1(10, 5, 8);
//suma2(10, 5, 8);

