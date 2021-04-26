function guardar() {
  var boton = document.getElementById("tarea-cliente-guardar");
  //Boton puesto en el HTML
  //   boton.addEventListener("click", nuevaTarea);
  mostrarTarea();
}

function nuevaTarea() {
  var tareaCliente__id = document.getElementById("tarea-cliente-id").value;
  var tareCliente__desc = document.getElementById("tarea-cliente-desc").value;
  var tareaCliente__urg = document.getElementById("tarea-cliente-urg").value;
  var tareaCliente__fecha = document.getElementById("tarea-cliente-fecha").value;

  var valoresTareasCliente = [
    tareCliente__desc,
    tareaCliente__urg,
    tareaCliente__fecha,
  ];

  localStorage.setItem(tareaCliente__id, valoresTareasCliente);
  //mostrarTarea();
  location.reload()
  preventDefault()
}

function mostrarTarea() {
  var tareasPendientes = document.getElementById("tareas-pendientes");
  var notasCliente = document.getElementById("notas-cliente");
 
  for (var i = 0; i < localStorage.length; i++) {
    var id = localStorage.key(i);
    var valor = localStorage.getItem(id);
    tareasPendientes.innerHTML +=
    '<p id="nuevaTareaPendiente">' + id + " - " + valor +
    " - " +
    "<a href='#tareasPendientes' id='eliminarUna' onclick=\"eliminarUna('" +
    id +
    "')\">X</a><p/>";
  }

  notasCliente.innerHTML +=
    '<p><a href="#" id="eliminarTodas" onclick="eliminarTareas()">Eliminar todas las tareas</a></p>';
}

function eliminarUna(tareaCliente__id) {
  if (confirm("Esta seguro de eliminar esta tarea?")) {
    localStorage.removeItem(tareaCliente__id);
    location.reload();
  }
}

function eliminarTareas() {
  localStorage.clear();
  location.reload();
  confirm("¿Esta seguro que quiere eliminar todas las tareas?");
}
window.addEventListener("load", guardar);