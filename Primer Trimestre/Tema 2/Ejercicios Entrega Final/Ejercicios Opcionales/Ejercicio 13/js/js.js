// FUNCIÓN QUE RECIBE UN ARRAY Y ELIMINA LOS REPETIDOS
function eliminarRepetidos(arrayNombres) {
    let nombreSet = new Set(arrayNombres);

    console.log(nombreSet);
}

let arrayNombres = ["Pepe", "Juan", "Mario", "Pepe", "Jose", "Federico"];

eliminarRepetidos(arrayNombres);