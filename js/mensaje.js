//APLICANDO DOM CREO UN NUEVO MENSAJE EN EL FOOTER
var contain = document.getElementById("extra")
var div1 = document.createElement("div")

var estilosBrugge = [ 'Session IPA' , 'Honey' , 'Irish Red' , 'New England IPA' , 'Golden Wheat' , 'Oatmeal Stout' , 'Summer IPA' , 'Old Ale'] //CREO UN VECTOR CON LSO ESTILOS DE LAS CERVEZAS
estilosBrugge.sort() // ORDENO LOS VALORES (STRING) ALFABETICAMENTE
var parrafoFinal = document.createElement('p')
parrafoFinal.innerHTML = 'Disfruta con Brugge de: '
var lista = document.createElement("article")

for(var i=7; i < estilosBrugge.length; i++){
    var li = document.createElement('p')
    li.innerHTML = estilosBrugge
    lista.appendChild(li)
}

div1.appendChild(parrafoFinal)
div1.appendChild(lista)

contain.appendChild(div1)

//APLICO ESTILOS AL PARRAFO Y LISTA CREADOS
parrafoFinal.style.fontSize = '20px'
parrafoFinal.style.fontWeight = 'bolder'
parrafoFinal.style.height = '30px'
parrafoFinal.style.textAlign = 'center'
li.style.fontSize = '20px'
li.style.fontWeight = 'bolder'
li.style.height = '30px'
li.style.textAlign = 'center'