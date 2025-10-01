// ENCAPSULAMIENTO: concepto fundamental de la POO.
// Modificador de acceso private: #
// Modificador de acceso public: (no lleva simbolo o palabra)

class Prueba {
    atributo;// publico
    #medidas;
    color;
    #pais;

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

const prueba1 = new Prueba(1000, 15, "verde", 'Colombia');

console.log(prueba1.getPais());

prueba1.pais = 'Belice';
console.log(prueba1.pais);

console.log('***********************************');

const zzz = new Prueba(5746, 85, "azul", 'Suiza');

console.log(zzz.pais);



