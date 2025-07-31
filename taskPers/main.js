import * as procesos from "./procesos.js";
import * as moduleWrite from "./module_write.js";
import * as moduleRead from "./module_read.js";
import promptSync from 'prompt-sync';
const prompt2 = promptSync();

const route = "./tareas.json";
const gestorTareas = {
  tareas: [],
  agregar() {
    const descripcion = prompt2("Describir la tarea.");
    if (descripcion.trim() === "") {
      console.log("La descripcion de la tarea no se puede quedar vacia.");
    } else {
      const tarea = {
        id: this.tareas.length + 1,
        descripcion: descripcion,
        completada: false,
      };
      this.tareas.push(tarea);
      console.log("La tarea se agregó exitosamente!");
    }
  },

  completar() {
    const id = parseInt(prompt2("ingresa el Id"));
    const objetoTarea = this.tareas.find((y) => y.id === id);
    if (!objetoTarea) {
      console.log("Tarea no encontrada");
    } else {
      objetoTarea.completada = true;
      console.log(`Tarea con id ${id} completada`);
    }
  },

  listarTareas() {
    let listadoDeTareas = "";
    this.tareas.forEach((t) => {
      listadoDeTareas += `ID: ${t.id}  DESCRIPCION: ${t.descripcion
        }  COMPLETADA: ${t.completada ? "Si" : "No"} \n`;
    });
    console.log(listadoDeTareas);
  },
};

procesos.nombreDelUsuario(gestorTareas);
