function iniciar(){
  var elemento = document.getElementById('lienzo1');
  lienzo=elemento.getContext('2d');
  lienzo.fillStyle="#F4AC52";
  lienzo.font="bold 26px 'Lato', sans-serif";
  lienzo.textAlign="start";
  lienzo.textBaseline="middle";
  lienzo.fillText("Te esperamos en:",50,50);
  lienzo.strokeRect(25,25,250,55);
  lienzo.stroke();
}
//Llamo a la función para que se me dibuje el texto
window.addEventListener("load", iniciar, false);