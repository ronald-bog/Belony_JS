// Desestructuracion de Objetos

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

validar(usuario);