function agregar() {
    const descripcion = prompt("Describir la tarea.");
    if (descripcion.trim() === "") {
        alert("La descripcion de la tarea no se puede quedar vacia.");
    } else {
        const tarea = {
            id: this.tareas.length + 1,
            descripcion: descripcion,
            completada: false,
        };
        this.tareas.push(tarea);
        alert("La tarea se agregó exitosamente!");
    }
}


const descripcion = "";
console.log(descripcion.trim() === "");

if (false) {
    console.log('Es verdadero');
}


function completar() {
    const id = parseInt(prompt("ingresa el Id"));
    const objetoTarea = this.tareas.find((y) => y.id === id);

    if (!objetoTarea) {
        alert("Tarea no encontrada");
    } else {
        objetoTarea.completada = true;
        alert(`Tarea con id ${id} completada`);
    }
}

///////////////////////////////

const tareas = [{ id: 1, completado: false }, { id: 2, completado: false }];
const id = 1;
const Tarea = tareas.find((y) => y.id === id);

console.log(typeof Tarea);
if (!Tarea) {
    console.log(`Tarea con id completada`);
}
///////////////////////////////////





function listarTareas() {
    let listadoDeTareas = "";
    this.tareas.forEach((t) => {
        listadoDeTareas += `ID: ${t.id}  DESCRIPCION: ${t.descripcion
            }  COMPLETADA: ${t.completada ? "Si" : "No"} \n`;
    });
    alert(listadoDeTareas);
}

