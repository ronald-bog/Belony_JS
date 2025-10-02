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

    presentar() {
        return `Hola soy ${this.#nombre}`;
    }

    getNombre() {
        return this.#nombre;
    }

    getEdad() {
        return this.#edad;
    }

    getDocumentoID() {
        return this.#documentoID;
    }

    setNombre() {
        this.#nombre = nombre;
    }

    setEdad() {
        his.#edad = edad;
    }

    setDocumentoID() {
        this.#documentoID = documentoID;
    }
}

module.exports = Persona;