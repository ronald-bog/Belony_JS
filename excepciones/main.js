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

//* finally: siempre se ejecuta exista o no Error.

try {
    const estudiante = 'Sofia';
    console.log(estudiante);
} catch (error) {
    console.log('se produce un ERROR');
}

console.log('Esta porcion de codigo siempre se va a ejecutar');


//* throw: lanzar una exepcion (ERROR) y adicional poner mensaje personalizado

try {
    throw new Error("He creado este error de referencia");
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}

//*  instanceof: validar tipo de exepcion (error), basado en la instancia (poo)


try {
    console.log(estudiante);
    //JSON.parse('{"nombre":"Juan", "edad":}');

} catch (error) {
    if (error instanceof SyntaxError) {
        console.log('Este es un error de sintaxis');
    } else if (error instanceof ReferenceError) {
        console.log('Este es un error de referencia');
    } else if (error instanceof TypeError) {
        console.log('Este es un error de tipo');
    } else if (error instanceof RangeError) {
        console.log('Este es un error de rango');
    }
}

try {
    //console.log(estudiante);
    //JSON.parse('{"nombre":"Juan", "edad":}');
    const city = 'Madrid';
    console.log(city.repeat(-2));

} catch (error) {
    if (error.name === 'SyntaxError') {
        console.log('Este es un error de sintaxis');
    } else if (error.name === 'ReferenceError') {
        console.log('Este es un error de referencia');
    } else if (error.name === 'TypeError') {
        console.log('Este es un error de tipo');
    } else if (error.name === 'RangeError') {
        console.log('Este es un error de rango');
    }
}
