// FUNCIÓN QUE RECIBE DOS CADENAS
function compararCadenas(cad1, cad2) {
    if (typeof cad1 !== 'string' || typeof cad2 !== 'string') {
        console.log('Error, ambos parámetros deben ser cadenas de texto.');
    } else {
        if (cad1.length < cad2.length) {
            console.log('La cadena más corta es: ' + cad1);
        } else {
            if (cad2.length < cad1.length) {
                console.log('La cadena más corta es: ' + cad2);
            } else {
                console.log('Las dos cadenas tienen la misma longitud.');
            }
        }
    }
}

//PRUEBAS
compararCadenas("Mario", "Pepito");
compararCadenas("casa", "uva");
compararCadenas("Mario", 4);