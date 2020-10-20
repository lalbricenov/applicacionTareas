let tareas = JSON.parse(localStorage.getItem("Tareas"));
if (tareas == null) tareas = [];
function addTarea(fecha, materia, descripcion, realizada) {
  let newTarea = {
    id: nextId(),
    fecha: fecha,
    materia: materia,
    descripcion: descripcion,
    realizada: realizada,
  };
  tareas.push(newTarea);
  // PARA HACER
  // Guarde el array tareas en el almacenamiento local.
  // Ayuda: JSON stringify
  localStorage.setItem("Tareas", JSON.stringify(tareas));
  //
}
function deleteTarea(id) {
  // Función que elimina la tarea con el id dado
  let index = -1;
  for (let i = 0; i < tareas.length; i++) {
    if (tareas[i].id == id) index = i;
  }
  if (index != -1) tareas.splice(index, 1);

  // PARA HACER
  // Guarde el array tareas en el almacenamiento local.
  // Ayuda: JSON stringify
  localStorage.setItem("Tareas", JSON.stringify(tareas));
  //
}
function modifyTarea(id, fecha, materia, descripcion, realizada) {
  for (tarea of tareas) {
    if (tarea.id == id) {
      tarea.fecha = fecha;
      tarea.materia = materia;
      tarea.descripcion = descripcion;
      tarea.realizada = realizada;
      break;
    }
  }
  // PARA HACER
  // Guarde el array tareas en el almacenamiento local.
  // Ayuda: JSON stringify
  localStorage.setItem("Tareas", JSON.stringify(tareas));

  //
}
function getTarea(id) {
  for (tarea of tareas) {
    if (tarea.id == id) {
      return tarea;
    }
  }
}
function nextId() {
  let id = 1;
  for (tarea of tareas) {
    if (tarea.id >= id) id = tarea.id + 1;
  }
  return id;
}
