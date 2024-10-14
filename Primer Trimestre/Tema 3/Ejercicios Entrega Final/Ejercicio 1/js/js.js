// VARIABLES
let entradaDeTexto = document.getElementById("entrdaTexto");

let botonValidarDni = document.getElementById("botonValidarDni");
let botonValidarFecha = document.getElementById("botonValidarFecha");
let botonValidarIdentificador = document.getElementById("botonValidarIdentificador");


// FUNCIÓN PARA VALIDAR EL DNI
function validarDni() {
    
    let ristra = /^[0-9]{7,8}[A-Z]$/;

    if (ristra.test(entradaDeTexto.value)) {
        alert("Se ha introducido DNI con éxito.");
    } else{
        alert("La entrada no es un DNI válido.");
    }
};

// FUNCIÓN PARA LA FECHA
function validarFecha() {
    
    let ristra = /^\d{2}\/\d{2}\/\d{2,4}$/;

    if (ristra.test(entradaDeTexto.value)) {
        alert("Se ha introducido la fecha con éxito.");
    } else{
        alert("La entrada no es una fecha válido.");
    }
}

// FUNCIÓN PARA VALIDAR EL IDENTIFICADOR
function validarIdentificador() {
    
    let ristra =/^[a-z_][a-zA-Z0-9_]*$/;

    if (ristra.test(entradaDeTexto.value)) {
        alert("Se ha introducido el identificador con éxito.");
    } else{
        alert("La entrada no es un identificador válido.");
    }
}

// BOTONES
botonValidarDni.addEventListener("click", validarDni);
botonValidarFecha.addEventListener("click", validarFecha);
botonValidarIdentificador.addEventListener("click", validarIdentificador);