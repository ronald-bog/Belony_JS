// anidamiento (nesting)

const tipo = 'secundario';

const color = 'verde';

if (tipo === 'primario') {
    if (color === 'amarillo' || color === 'rojo' || color === 'azul') {
        console.log(`${color} SIII es un color PRIMARIO, FELICITACIONES!!!!`);
    }
    else {
        console.log(`${color} NOOOO es un color PRIMARIO, por favor repasa los colores`);
    }
}
else if (tipo === 'secundario') {
    if (color === 'verde') {
        console.log(`${color} SIII es un color SECUNDARIO, FELICITACIONES!!!!`);
    }
    else if (color === 'purpura') {
        console.log(`${color} SIII es un color SECUNDARIO, FELICITACIONES!!!!`);
    }
    else if (color === 'naranja') {
        console.log(`${color} SIII es un color SECUNDARIO, FELICITACIONES!!!!`);
    }
    else {
        console.log(`${color} NOOOO es un color SECUNDARIO, por favor repasa los colores`);
    }
}