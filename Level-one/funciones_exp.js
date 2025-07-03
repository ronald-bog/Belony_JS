// FUNCIONES EXPRESIVAS

//Anonimas 
const saludar = function (nombre) {
    return `Hola ${nombre} estas aprendiendo Funciones en JS`;
};

const saludar2 = function (nombre) {
    console.log(`Hola ${nombre} estas aprendiendo Funciones en JS`);
};

saludar2('Ronald');

//Flecha (Arrow Functions)

const flecha = () => {
    console.log(`Soy una flecha`);
};

const flecha1 = () => console.log(`Soy una flecha 1`);

const flecha2 = () => {
    return 100 + 200;
};

const flecha3 = () => 100 + 200;

const flecha4 = () => {
    const a = 100;
    const b = 200;
    return a + b;
};

console.log(flecha4());

const arrowP1 = (numero) => {
    return numero * 2;
};

const arrowP2 = (numero) => numero * 2;

const arrowP3 = numero => numero * 2;

//const funcionFlecha = "mayusc";
//const funcionflecha = "min";
// Nomeclaura o notaciones de nombrado (buenas practicas)
// camelCase  nombreEstudianteGrado
// snake_case nombre_estudiante_grado

const arrowP4 = (num1, num2) => {
    return num1 * num2;
};

const arrowP5 = (num1, num2) => num1 * num2;



// Retorno de multiples valores

const z = 10;
const arrowP6 = (x, y) => {
    x = y;
    y = z;
    return [x, y];
};

//console.log(arrowP6(5, 11));
const [belony, JS] = arrowP6(5, 11);

console.log(belony);
console.log(JS);

console.log(belony + JS);

function texto(nombre, saludo = 'Hola') {
    const saludoCompleto = `${saludo} ${nombre}`;
    const informacion = 'Estamos probando la funcion con multiple retorno';
    return [saludoCompleto, informacion];
}
const [saludo, info] = texto('Roger');

console.log(saludo);
console.log('************************************');
console.log(info);

// Expresion ternaria

const nombre = "Roger";
const edad = 15;
const country = "Mexico";

const saludo2 = (x, y, z) => {
    const validacion = y >= 18 ? `mayor` : `menor`;
    console.log(`Hola ${x} tienes ${y} años, tu pais de naciemiento es ${z} y eres ${validacion} de edad`);
};

const saludo3 = (x, y, z) =>
    console.log(`Hola ${x} tienes ${y} años, tu pais de naciemiento es ${z} y eres ${y >= 18 ? `mayor` : `menor`} de edad`);

saludo2(nombre, edad, country);
