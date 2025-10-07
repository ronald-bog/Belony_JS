// POLIMORFISMO = varias formas

// Capacidad de implementar un objeto (clase) o un metodo de diferentes FORMAS.

// Sobreescritura y sobrecarga de metodos, hacen parte del polimorfismo.

// Javascript no tiene capacidad directamente de realizar sobrecarga de metodos, pero la podemos simular con condiciones.

class calculadora {
    operar(num1, num2) {
        if (typeof num2 === `undefined`) {
            console.log(`El parametro 2, esta llegando asi: ${num2}`);

            // Comportamiento que va ejecutar si se pasa un argumento
            return num1 * num1;
        } else {
            // Comportamiento que va ejecutar si se pasan dos argumentos
            return num1 * num2;
        }
    }
}

const calculo = new calculadora();

console.log(calculo.operar(2));
console.log(calculo.operar(2, 3));
