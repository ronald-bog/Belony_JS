import promptSync from 'prompt-sync';
const prompt2 = promptSync();

export function nombreDelUsuario() {
  const nombre = prompt2(" Por favor escribe su nombre! ");
  if (nombre.trim() !== "") {
    menu(nombre);
  } else {
    console.log("Nombre invalido!");
    nombreDelUsuario();
  }
}

export function menu(x) {
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
