/*
class Cellular {
  marca;
  modelo;
  color;
  type;
  presentacion() {
    console.log(
      `Hoy se presenta el ultimo alta gama de ${this.marca} modelo ${this.modelo} y color ${this.color} y de tipo ${this.type} `
    );
  }
}

presentacion1 = new Cellular();
presentacion1.marca = "Toyota";
presentacion1.modelo = "Rav4";
presentacion1.color = "Black";
presentacion1.type = "Survey";
console.log(presentacion1.marca);
console.log(presentacion1.modelo);
console.log(presentacion1.color);
console.log(presentacion1.type);

presentacion1.presentacion();
*/

class Cellular {
  marca;
  modelo;
  color;
  type;
  constructor(mark, models, color, type) {
    (this.marca = mark),
      (this.modelo = models),
      (this.color = color),
      (this.type = type);
  }
  presentacion() {
    console.log(
      `Hoy se presenta el ultimo alta gama de ${this.marca} modelo ${this.modelo} y color ${this.color} y de tipo ${this.type} `
    );
  }
}

presentacion1 = new Cellular("Honda", "Accord", "Red", "sedan");

console.log(presentacion1.mark);
console.log(presentacion1.models);
console.log(presentacion1.color);
console.log(presentacion1.type);

presentacion1.presentacion();
