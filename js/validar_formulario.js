// Creo las valiables para los campos que voy a validar con JS
var usuario = document.getElementById('nombre')
var correo = document.getElementById('email')
var telefono = document.getElementById('telefono')


// Creo la función validarDatos y la asocia al evento addEventListener
function validarDatos() {
  usuario.addEventListener('input', validarUsuario)
  correo.addEventListener('input', validarCorreo)
  telefono.addEventListener('input', validarTelefono)


  validarUsuario()
  validarCorreo()
  validarTelefono()
}

// Creo la función validarUsuario

function validarUsuario() {
  if(usuario.value == '') {
    usuario.style.backgroundColor = '#F58079'
    usuario.setCustomValidity('Por favor ingresar el Nombre y Apellido')
  } else {
    usuario.style.backgroundColor = '#D6F17A'
    usuario.setCustomValidity('')
  }
}

// Creo la función validarCorreo
function validarCorreo() {
  if(correo.value == '') {
    correo.style.backgroundColor ='#F58079'
    correo.setCustomValidity('Por favor ingresar el correo electrónico')
  } else {
    correo.style.backgroundColor = '#D6F17A'
    correo.setCustomValidity('')
  }
}

// Croe la función validarTelefono
function validarTelefono() {
  if(telefono.value == '') {
    telefono.style.backgroundColor = '#F58079'
    telefono.setCustomValidity('Por favor ingresar el número de teléfono')
  } else {
    telefono.style.backgroundColor = '#D6F17A'
    telefono.setCustomValidity('')
  }
}



// Quiero que al cargar el archivo se ejecute la función validarDatos

window.addEventListener('load', validarDatos)