/*
Crear un gestor de tareas con los siguientes requisitos: 

1. Definir una función para solicitar nombre de usuario, la cual validará que el campo nombre no esté vacío o con espacios en blanco. Si el nombre es válido, deberá llamar a la función menú que se creará en el punto 2.  Si el nombre no es válido, debe mostrar el error al usuario y volver a preguntar nombre.

2. Definir una función menú, la cual saludará al usuario por su nombre, también será encargada de mostrar 5 opciones (Adicionar tarea, completar tarea, Listar todas las tareas, Listar tareas completadas y salir. De acuerdo con la selección del usuario el menú ejecutara la funcionalidad correspondiente llamando los métodos pertenecientes al objeto "gestorTareas".  

La opción de salida no requiere creación de un método, su lógica se puede realizar directamente en el método menú.
Se debe tener en cuenta que si el usuario selecciona una opción no valida se mostrará en un alert el error y se volverá a mostrar el menú.

3. Crear el objeto "gestorTareas" el cual contendrá las siguientes propiedades: 

* Arreglo vacío:  almacenara las tareas agregadas por el usuario (cada 	tarea es un objeto con 3 propiedades (id, descripción, completada).

* Método agregar: creará un objeto "tarea" donde se almacenará 3 propiedades (id, descripción, completada). La descripción de la tarea viene del menú, el id se creará en el método empezando desde 1, y la propiedad completada siempre se inicializará en false. Si la descripción de la tarea está vacía o con espacios se mostrará error al usuario en un alert.

* Método completar: pedirá al usuario el id de la tarea que se desea completar, la filtrara y cambiara su propiedad “completada” a true, en caso de que el id de la tarea no se encuentre mostrara el error al usuario en un alert.

* Método listar tareas: Mostrara en un alert el listado de todas las tareas creadas, donde se deben visualizar sus 3 propiedades.

* Método listar tareas completadas: Mostrara en un alert el listado solo de las tareas que están marcadas como completadas (su propiedad completada=true), donde se deben visualizar sus 3 propiedades.

*/
const prompt2 = require("prompt-sync")();
const fs = require('fs');

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
      // debes primero leer el archivo
      // despues agregar elementos nuevos al arreglo

      const tareaJason = JSON.stringify(this.tareas);
      fs.writeFileSync('./tareas.json', tareaJason);
      console.log("La tarea se agregó exitosamente!");
    }
  },

  completar() {
    // leer y escribir
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
    // leer archivo
    const tareajson = fs.readFileSync('./tareas.json');
    const tareaObj = JSON.parse(tareajson);

    let listadoDeTareas = "";
    tareaObj.forEach((t) => {
      listadoDeTareas += `ID: ${t.id}  DESCRIPCION: ${t.descripcion
        }  COMPLETADA: ${t.completada ? "Si" : "No"} \n`;
    });
    console.log(listadoDeTareas);
  },
  /*
  listarTareasAnterior(){
    let listadoDeTareas = "";
    this.tareas.forEach((t) => {
      //if (t.completada) {
      // listaCondicionada = "Si";
      //} else {
      // listaCondicionada = "No";
      //}

      listadoDeTareas += `ID: ${t.id}  DESCRIPCION: ${
        t.descripcion
      }  COMPLETADA: ${t.completada ? "Si" : "No"} \n`;
    });
    alert(listadoDeTareas);
    /*let listadoDeTareas = "";
    for (const task of this.tareas) {
      let listaCondicionada;
      if (task.completada) {
        listaCondicionada = "Si";
      } else {
        listaCondicionada = "No";
      }
      listadoDeTareas += `ID: ${task.id}  DESCRIPCION: ${task.descripcion}  COMPLETADA: ${listaCondicionada} \n`;
    }
    alert(listadoDeTareas); 
  },*/

  listarTareasCompletadas() {
    // leer archivo
    const taskCompletadas = this.tareas.filter((task2) => task2.completada);
    let lisTareasCompletas = "";
    taskCompletadas.forEach((task3) => {
      lisTareasCompletas += `ID: ${task3.id}  DESCRIPCION: ${task3.descripcion}  \n`;
    });
    console.log(lisTareasCompletas);
  },
};

function nombreDelUsuario() {
  const nombre = prompt2(" Por favor escribe su nombre! ");
  if (nombre.trim() !== "") {
    menu(nombre);
  } else {
    console.log("Nombre invalido!");
    nombreDelUsuario();
  }
}
nombreDelUsuario();

function menu(x) {
  const recibirOpcion = parseInt(
    prompt2(
      `Hola ${x}, por favor selecciona una opcion del menu 
1 - Adicionar tarea.
2 - Completar tarea.
3 - Listar todas las tareas.
4 - Listar tareas completadas.
5 - Salir.`
    )
  );
  switch (recibirOpcion) {
    case 1:
      gestorTareas.agregar();
      break;
    case 2:
      gestorTareas.completar();
      break;
    case 3:
      gestorTareas.listarTareas();
      break;
    case 4:
      gestorTareas.listarTareasCompletadas();
      break;
    case 5:
      console.log("Haz salido correctamente!");
      return;
    default:
      console.log("Opcion no valida");
  }
  menu(x);
}


