var video = document.querySelector('#mivideo');
var boton_rep = document.querySelector('#reproducir');
//creo la funcon reproducir para que al hacer click en play se reproduzca el video 
function reproducir () {
  if (video.paused) {
    video.play ();
  } else {
    video.paused();
  }
}
//creo la funcion detener para el boton stop que detendra la linea de tiempo.
function detener() {
  video.pause();
}
//creo la funcion saltar, para los botones adelantar y retroceder
function saltar (fotogramas) {
  video.currentTime+=fotogramas;
}