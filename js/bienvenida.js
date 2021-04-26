
/*MEDIANTE UN PROMPT SE LE SOLICITA AL USUARIO  QUE 
INGRESE SU NOMBRE, Y SE GUARDAN COMO DATOS EN VARIABLES*/
var nombre = prompt('Bienvenid@ a Brugge! Por favor decinos tu nombre: ' + ' ')


/*APLICACION DE MODELO DE OBJETO DOCUMENTO (DOM) PARA AGREGAR UN MENSAJE DE BIENVENIDA
Y APLICAR ESTILOS AL TEXTO INGRESADO */


var saludo = document.getElementById('bienvenidaa')
saludo.innerHTML = '<p> Bienvenid@ ' + nombre + ' a Brugge. </p> <p>  Disfrutá este verano con tu Brugge bien fria.</p>'  // MENSAJE DE BIENVENIDA
// ESTILOS AL TEXTO INGRESADO
saludo.style.fontSize = '20px'
saludo.style.fontWeight = 'bolder'
saludo.style.height = '30px'
saludo.style.textAlign = 'center'


//APLICACION DE MODELO DE OBJETO DOCUMENTO (DOM) PARA CAMBIAR EL COLOR DE LOS TÍTULOS H4 EN LA SECCIÓN DE NUESTROS ESTILOS

var tituloNuestrosEstilos = document.getElementsByClassName('estilonombre')
tituloNuestrosEstilos[0].style.color = '#F4AC52'
tituloNuestrosEstilos[1].style.color = '#F4AC52'
tituloNuestrosEstilos[2].style.color = '#F4AC52'
tituloNuestrosEstilos[3].style.color = '#F4AC52'
tituloNuestrosEstilos[4].style.color = '#F4AC52'
tituloNuestrosEstilos[5].style.color = '#F4AC52'
tituloNuestrosEstilos[6].style.color = '#F4AC52'
tituloNuestrosEstilos[7].style.color = '#F4AC52'




