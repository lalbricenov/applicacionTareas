let numParametros = Object.keys(parameters).length;
console.log(numParametros);
console.log(parameters);
if (numParametros == 4) {
  console.log("Se va a crear una nueva tarea");
  addTarea(
    parameters.fecha,
    parameters.materia,
    parameters.descripcion,
    parameters.realizada
  );
} else if (numParametros == 5) {
  modifyTarea(
    parameters.id,
    parameters.fecha,
    parameters.materia,
    parameters.descripcion,
    parameters.realizada
  );
}
// window.location.replace("index.html");
// window.history.replaceState({}, document.title, "/" + "my-new-url.html");
window.history.pushState({}, document.title, "index.html");
// console.log(document.title);

updateTableHtml(tareas);
