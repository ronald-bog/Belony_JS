
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
