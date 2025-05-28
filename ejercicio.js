const qty = parseInt(prompt("Cuantos estudiantes deseas registrar?"));

const estudiantes = [];

for (let i = 1; i <= qty; i++) {
    const prueba = prompt("Dame el nombre del alumno y la calificacion separados por un guion, ejemplo (belony-8.5");
    estudiantes.push(prueba);
}

console.log(estudiantes);

/*const estudiantes = [
  "Sara-9.5",
  "yveca-7.6",
  "mike-5.4",
  "veronica-6.6",
  "James-3.2",
  "Zoe-4.3",
];*/

/*
Peter-6.6
Luis-8.5
Michael-9
Lina-2.5
6.65
*/

function informes(arraySt) {
    const mayores6 = [];
    let suma = 0;
    arraySt.forEach(e => {
        suma += parseFloat(e.split('-')[1]);
        e.split('-')[1] >= 6 ? mayores6.push(e.split('-')[0]) : null;
    });
    alert(`El promedio de todas las notas es: ${suma / arraySt.length}
****************************************
Los estudiantes con nota mayor a 6 son: ${mayores6.join(', ')}`);
    //mayores6.forEach(i => console.log(i));
}

informes(estudiantes);

