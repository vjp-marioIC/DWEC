// VARIABLES
let entradaTextoNota = document.getElementById("nota");

let botonGuardarNota = document.getElementById("botonGuardarNota");

elementoP = document.querySelector("p");

// FUNCIÓN PARA CREAR UNA NOTA
function crearaNota() {
    let divNota = document.createElement("p");
    let nombreNota =  document.createTextNode(entradaTextoNota.value);

    divNota.appendChild(nombreNota);
    document.body.appendChild(divNota);

}

// FUNCIÓN PARA BORRAR UNA NOTA
function crearaNota() {

}

botonGuardarNota.addEventListener("click", crearaNota);
