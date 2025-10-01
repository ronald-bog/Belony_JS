// Clase Padre
class Persona {
    #nombre;
    #edad;
    #documentoID;

    constructor(nombre, edad, documentoID) {
        this.#nombre = nombre;
        this.#edad = edad;
        this.#documentoID = documentoID;
    }
}

module.exports = Persona;