const estudiantes = [
    "Sara-9.5",
    "yveca-7.6",
    "mike-5.4",
    "veronica-6.6",
    "James-3.2",
    "Zoe-4.3",
];

function informes(arraySt) {
    const mayores6 = [];
    let suma = 0;
    arraySt.forEach(e => {
        suma += parseFloat(e.split('-')[1]);
        e.split('-')[1] >= 6 ? mayores6.push(e.split('-')[0]) : null;
    });
    console.log(`El promedio de todas las notas es: ${suma / arraySt.length}
****************************************
Los estudiantes con nota mayor a 6 son: ${mayores6.join(', ')}`);
    //mayores6.forEach(i => console.log(i));
}

informes(estudiantes);