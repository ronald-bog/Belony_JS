// Clase hija

const Persona = require('./05-persona');

class Empleado extends Persona {
    constructor(nombre, edad, documentoID) {
        super(nombre, edad, documentoID);
    }
}