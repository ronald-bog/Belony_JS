
const estudiante = {
    nombre: 'Belony',
    edad: 30
};

const copiaEstudiante = {...estudiante};

console.log(estudiante);
console.log(copiaEstudiante);

const datosEstudio = {
    lenguaje: 'Javascript',
    nivel: 'Basico'
}

const informacionTotalEstudiante = {...copiaEstudiante, ...datosEstudio};

console.log(informacionTotalEstudiante);