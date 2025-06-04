// Desestructuracion de Objetos
/*
const paises = {
    belize: 'Belmopan',
    chile: 'Santiago',
    peru: 'Lima',
    espana: 'Madrid',
    usa: 'Washington',
    colombia: 'Bogota',
    alemania: 'Berlin'
};

const { alemania, belize, chile, usa } = paises;
const { espana: es, peru: pe, colombia: co } = paises;
//console.log(chile);
//console.log(pe);
console.log(polonia);

// Desestructuracion anidada

const countries = {
    belize: {
        capital: 'Belmopan',
        poblacion: 25000
    },
    colombia: {
        capital: 'Bogota',
        poblacion: 10000000
    }
};

const { belize: { capital, poblacion } } = countries;
const { belize: { capital: cp, poblacion: pob } } = countries;

console.log(capital);
console.log(cp);

const usuario = {
    id: 64645,
    name: 'Luco',
    password: 'sd63sd4g6dfg4'
};

function validar(x) {
    const { id, name } = x;
    console.log(`Tu id es: ${id}
Tu nombre es: ${name}`);
}

//validar(usuario);

function validar2({ id, name }) {
    console.log(`Tu id es: ${id} - Tu nombre es: ${name}`);
}
//validar2(usuario);

const validar3 = ({ id, name }) => console.log(`Tu id es: ${id} - Tu nombre es: ${name}`);

validar3(usuario);

// Desestructuracion de arreglos, seleccionando elementos especificos

const lenguajes = ['Go', 'Basic', 'Pascal', 'C#', 'PL1', 'Cobol'];

const [, run, botellas, , , julio] = lenguajes;

console.log(run);
console.log(botellas);
console.log(julio);

// Desestructuracion de arreglos con Rest ... *Devuelve un arreglo

const leng = ['Go', 'Basic', 'Pascal', 'C#', 'PL1', 'Cobol'];

const [, , ...lengSel] = leng;

console.log(lengSel);

// Profundizacion en Funciones

// Retorno condicionado

function evaluarEdad(edad) {
    if (edad >= 18) {
        return 'Eres mayor de edad';
    }
    else {
        return 'Eres menor de edad';
    }
}

console.log(evaluarEdad(20));
*/
