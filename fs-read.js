import fs, { writeFileSync } from 'fs';

// lectura de archivos Sincronica
let lecturaRes;
/*
try {
    const lectura = fs.readFileSync('./planetas.json', 'utf-8');
    console.log('Carga del archivo fue exitosa');
    lecturaRes = lectura;
} catch (error) {
    console.log('**** Se presento un error ******');
    console.log(error);
}
*/
// console.log(lecturaRes);

// Lectura de archivos asincrona
//let dataExt;

fs.readFile('./prueba.json', 'utf-8', (err, data) => {
    if (err) {
        console.log('Salio ERROR');
        return;
    }
    console.log('Lectura exitosa');
    console.log('---------------');
    const autoObj = JSON.parse(data);
    autoObj.marca = 'Mercedes';

    const autoStr = JSON.stringify(autoObj);
    fs.writeFile('./prueba.json', autoStr, 'utf-8', (err) => {
        if (err) {
            console.log('Salio Error');
            console.log(err.errno);
            return;
        }
        console.log('Se guardo exitosamente');
    });
    //dataExt = data;
});



/*
planetasObj[0].planeta = 'tierra';

const planetasJson = JSON.stringify(planetasObj);
try {
    writeFileSync('./planetas.json', planetasJson, 'utf-8');
    console.LOG('ESTE SE MODIFICO EXITOSAMENTE');
} catch (error) {
    console.log('Se genero un error');
}
*/