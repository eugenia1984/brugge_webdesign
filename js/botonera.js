function mostrarLista(lista) {
  var elemento = document.getElementById('opciones')
  
    if(elemento.style.display == 'none') {
      elemento.style.display= 'block'
    } else {
      elemento.style.display = 'none'
    }     
}