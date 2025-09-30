// ENCAPSULAMIENTO: concepto fundamental de la POO.
// Modificador de acceso private: #
// Modificador de acceso public: (no lleva simbolo o palabra)

class Prueba {
    atributo = 5000;// publico
    #medidas = 6;
    color;
    #pais = "Colombia";


    constructor(a, m, c, p) {
        this.atributo = a;
        this.#medidas = m;
        this.color = c;
        this.#pais = p;
    }

    getMedidas() {
        return this.#medidas;
    }

    setMedidas(med) {
        this.#medidas = med;
    }

    getPais() {
        return this.#pais;
    }

    setPais(pais) {
        this.#pais = pais;
    }

}

const prueba1 = new Prueba(1000, 15, "verde");

console.log(prueba1.atributo);
console.log(prueba1.color);
console.log(prueba1.getMedidas());
prueba1.setMedidas(6896);
console.log(prueba1.getMedidas());
console.log(prueba1.getPais()); // undefined
prueba1.setPais("Alemania");
console.log(prueba1.getPais());


// STATIC: modificador de contexto

const planeta = 'Saturno';

class Sistema {
    static planeta = "Tierra";
    static estrella = 'Sol';

    static nombrarSistema() {
        console.log(`Sistema planetario, planeta: ${this.planeta}, estrella: ${this.estrella}`);
    }
}

//console.log(Sistema.planeta);
//console.log(Sistema.estrella);

const probando = new Sistema();
//probando.planeta = "Jupiter";
//probando.estrella = "Sirio";
//console.log(probando.estrella);


Sistema.nombrarSistema();

