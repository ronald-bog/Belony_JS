// EXCEPCIONES

//Ejemplo:
console.log(empleado);


// Tipos de excepciones

//* ReferenceError: Cuando usas una variable que no existe o no esta definida
console.log(cargo);

//* TypeError: Cuando intentas hacer una operacion con un tipo incorrecto

let cantidad = 10;

cantidad.toUpperCase();

//* SyntaxError: cuando error en la sintaxis del codigo, teniendo el lenguaje de programacion

JSON.parse('{"nombre":"Juan", "edad":}');

//* RangeError: Cuando un valor esta fuera de rango

const temperatura = 36.654684;

const tempRed = temperatura.toFixed(-2);
console.log(tempRed);

const city = 'Madrid';
console.log(city.repeat(-2));

//* Captura de excepciones: manejar un error durante la ejecucion, para evitar que mi codigo finalice abruptamente ( se rompa ). try...catch

// Componentes del objeto error
try {
    console.log(lenguaje);
} catch (error) {
    console.log('se produjo un error');
    console.log('____________________________');
    console.log(error.name);
    console.log('____________________________');
    console.log(error.message);
    console.log('____________________________');
    console.log(error.stack);
}


try {
    console.log(programa);
} catch (error) {
    console.log(`El error es: ${error.name}`);
}

function test() {
    console.log('Funcion Despues del error');
}

test();


try {
    console.log(usuario);
} catch (error) {
    console.log(`El error es: ${error.message}`);
}

console.log('Despues del try catch');

function delay() {
    setTimeout(() => {
        console.log("Se ejecuto la funcion Delay");
    }, 5000);
}

delay();

