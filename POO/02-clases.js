//* Clases: Estructura o plantilla para definir los nuevos objetos, sus propiedades y sus metodos.

//* palabra reservada 'class'
//* identificador o nombre, PascalCase 'PersonaEstudiante'
//* Estructura que compone la clase (propiedades y medotos), delimitada por {}
//* Los metodos no necesitan palabra function dentro de las clases
//* Cuando creamos no es necesario especificar un constructor, pero si es recomendable.
//* Para crear un constructor utilizamos palabra reservada 'constructor'
//* Las propiedades no es necesario escribierlas si tenemos un constructor, pero es recomendable.

class Persona {
    nombre;
    edad;

    constructor(nombre, edad) {
        this.nombre = nombre,
            this.edad = edad;
    }

    saludar() {
        console.log(`Hola soy ${this.nombre} estoy aprendiendo POO y tengo ${this.edad} anios`);
    }
}

//* Instanciacion de clases
// Crear un clase para poder instanciar
// Palabra reservada 'new' seguida del constructor

/*
const persona1 = new Persona();
const estudiante = new Persona();
const empleado = new Persona();
const persona2 = new Persona();

persona1.nombre = 'Hulk';
persona1.edad = 50;

estudiante.nombre = 'Roger';
estudiante.edad = 18;
empleado.nombre = 'Ana';
persona2.nombre = 'Belony';

console.log(persona1.nombre);
console.log(persona1.edad);
console.log(estudiante.nombre);
console.log(empleado.nombre);
console.log(persona2.nombre);

persona1.saludar();
estudiante.saludar();
empleado.saludar();
persona2.saludar();
*/

const persona1 = new Persona('Hulk');
// const persona2 = new Persona('Andres', 40);
// const persona3 = new Persona('Bill', 10);
// const persona4 = new Persona('Sofia', 11);
// const persona5 = new Persona('Donald', 22);


console.log(persona1.nombre);
console.log(persona1.edad);
// console.log(persona2.nombre);
// console.log(persona3.nombre);
// console.log(persona4.edad);
// console.log(persona5.nombre);

