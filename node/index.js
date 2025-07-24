/*

import { marca } from './var_ESM.js';

console.log(marca);


// COMMON JS
//const variable = require('./variables_CJS');

//console.log(variable.sports);
*/

const recibir = require('prompt-sync')();

const pais = recibir("Dime tu pais: ");
console.log(`El pais que me dijiste es: ${pais}`);