
try {
    //console.log(estudiante);
    //JSON.parse('{"nombre":"Juan", "edad":}');
    const city = 'Madrid';
    console.log(city.repeat(-2));

} catch (error) {
    if (error.name === 'SyntaxError') {
        console.log('Este es un error de sintaxis');
    } else if (error.name === 'ReferenceError') {
        console.log('Este es un error de referencia');
    } else if (error.name === 'TypeError') {
        console.log('Este es un error de tipo');
    } else if (error.name === 'RangeError') {
        console.log('Este es un error de rango');
    }
}