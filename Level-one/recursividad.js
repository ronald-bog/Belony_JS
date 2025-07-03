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
