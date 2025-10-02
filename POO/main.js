const Persona = require('./05-persona');
const Empleado = require('./05-empleado');

const roger = new Empleado('Roger Gates', 45, 567498, 'Manager', 'MG001');

console.log(`Name: ${roger.getNombre()}
Age: ${roger.getEdad()}
Id: ${roger.getDocumentoID()}
Job: ${roger.getJob()}
Code: ${roger.getCodigo()}
`);

console.log('_______________________________________');

console.log(roger.presentar());

console.log(roger.sumar(2, 4));

