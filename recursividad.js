// Funciones recursivas

function pedirNumero() {
    // FRONTEND
    const valor = parseInt(prompt("Por favor dame un numero mayor a 6: "));
    if (valor > 6) {
        pedirNumero();
    }
    else {
        alert('Gracias el numero es menor o iugal a 6');
    }
}
//pedirNumero();

function regresar(n) {
    if (n < 1) {
        console.log('Cuenta regresiva finalizada')
        return;
    }
    console.log(n);
    regresar(n - 1);
}

//regresar(8);

function progresivo(z) {
    /*if(z > 28){
        console.log('Cuenta progresiva finalizada')
        return;
    }
    console.log(z);
    progresivo(z + 1)*/
    z > 28 ? console.log('Cuenta progresiva finalizada') : (console.log(z), progresivo(z + 1))
}

//progresivo(11)


// Operador (...NombreVar)

function numeros(...x) {
    return x;
}

//console.log(numeros('Belony', 'Jonas', 'Ana'));

function listar(...nombres) {
    nombres.forEach(nombre => console.log(nombre))
}

//listar('Jhon', 'Jessica', 'Belony', 'Jonas', 'Ana')

function describirPersona(nombre, edad, ...hobbies) {
    console.log(`Nombre: ${nombre}`);
    console.log(`Edad: ${edad}`);
    console.log(`Hobbies: ${hobbies.join(', ')}`);
}

describirPersona('Jhon', 20, 'Leer', 'Jugar Play S', 'Ver TV', 'Chatear en whatsapp');

// Operador Spread (...)

const numbers = [1345, 89, 65]
console.log(numbers)
console.log(...numbers)

const nums = [20, 40, 60];
function sumar(r, t, y) {
    return r + t + y
}
console.log(sumar(...nums))