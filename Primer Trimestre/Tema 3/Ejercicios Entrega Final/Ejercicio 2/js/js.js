// VARIABLES
let entradaTextoNota = document.getElementById("nota");

let botonGuardarNota = document.getElementById("botonGuardarNota");

// FUNCIÓN PARA CREAR UNA NOTA
function crearaNota() {

    // COMPRUEBO SI LA ENTRADA DE TEXTO ESTÁ VACÍA
    if (entradaTextoNota.value === "") {
        alert("Introduce el nombre de una nota.");
        return;
    }

    let pNota = document.createElement("p");
    let nombreNota =  document.createTextNode(entradaTextoNota.value);

    pNota.appendChild(nombreNota);
    document.body.appendChild(pNota);

    // DOY FUNCIONALIDAD A LA NOTA
    pNota.addEventListener("click", function (evento) {
        
        // SI LA TECLA (Alt) ESTÁ PRESIONADA CAMBIO EL COLOR, SI NO LA BORRO
        if (evento.altKey) {
            cambiarColorDeaNota(pNota);
        } else {
            borrarNota(pNota);
        }
    });

    entradaTextoNota.value = "";
    entradaTextoNota.focus();
}

// FUNCIÓN PARA BORRAR UNA NOTA
function borrarNota(nota) {
    document.body.removeChild(nota);
}

// FUNCIÓN PARA CAMBIAR EL COLOR DE UNA NOTA
function cambiarColorDeaNota(nota) {
    if (nota.style.backgroundColor !== "red") {
        nota.style.backgroundColor = "red";
    } else {
        nota.style.backgroundColor = "";
    }
}

botonGuardarNota.addEventListener("click", crearaNota);