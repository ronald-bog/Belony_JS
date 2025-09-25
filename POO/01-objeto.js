//* (POO) es un paradigma de programación que utiliza "objetos" para representar datos y métodos.

//* Objetos: colección de propiedades, donde cada propiedad tiene un nombre (clave) y un valor. Los valores pueden ser de cualquier tipo, incluidos otros objetos, funciones (métodos) y primitivos.


const persona = {
    nombre: 'Hulk',
    edad: 30,
    saludar() {
        console.log('Hola estoy aprendiendo POO');
    }
};

console.log(persona.saludar());
