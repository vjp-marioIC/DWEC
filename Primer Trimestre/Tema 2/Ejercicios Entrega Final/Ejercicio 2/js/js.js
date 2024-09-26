// FUNCIÓN QUE RECIBE DOS CADENAS
function comprobarCadenasAlReves(cad1, cad2) {
    if (typeof cad1 !== 'string' || typeof cad2 !== 'string') {
        console.log('Ambos argumentos deben ser cadenas de texto.');
    } else {
        // Revertir la primera cadena
        //split = Divide un String en un array y lo divide con lo que quieras.
        //reverse = Devuelve el array del reves.
        //join = Pinta el array separado por lo que quieras. 
        let cad1DelReves = cad1.split('').reverse().join('');
    
        // COMPRUEBA SI CAD1DELREVES ES IGUAL A CAD2
        if (cad1DelReves === cad2) {
            console.log(cad1 + " es igual a "+ cad2 + " del revés.");
        } else {
            console.log(cad1 + " no es igual a " + cad2 + " del revés.");
        }
    }
}
  
//PRUEBAS
comprobarCadenasAlReves('hola', 'aloh');
comprobarCadenasAlReves('casa', 'casa');