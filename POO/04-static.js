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