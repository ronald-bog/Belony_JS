// Clase hija

const Persona = require('./05-persona');

class Empleado extends Persona {
    #job;
    #codigo;

    constructor(nombre, edad, documentoID, job, codigo) {
        super(nombre, edad, documentoID);
        this.#job = job;
        this.#codigo = codigo;
    }

    presentar() {
        return `Hola estoy actuando como metodo sobreescrito`;
    }

    sumar(n1, n2) {
        return n1 + n2;
    }

    getJob() {
        return this.#job;
    }

    getCodigo() {
        return this.#codigo;
    }

    setJob(job) {
        this.#job = job;
    }

    setCodigo(codigo) {
        this.#codigo = codigo;
    }
}

module.exports = Empleado;