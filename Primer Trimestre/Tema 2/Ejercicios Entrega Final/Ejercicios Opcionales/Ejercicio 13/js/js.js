// FUNCIÓN QUE RECIBE UN ARRAY Y ELIMINA LOS REPETIDOS
function eliminarRepetidos(arrayArgumentos) {
    let contador = 0;
    let argumentoRepetido = [];
    let arraySinRepetidos = new Set(arrayArgumentos);

    // RECORRO EL ARRAY DE ARGUMENTOS
    arrayArgumentos.forEach((argumento, index) => {
        // SI LA POSICIÓN DEL (argumento) ES DISTINTA AL (INDEX) INCREMENTO EL CONTADOR
        if (arrayArgumentos.indexOf(argumento) !== index) {
            contador++;

            // SI EN (argumentoRepetido) NO EXISTE EL (argumento) LO METO 
            if (!argumentoRepetido.includes(argumento)) {
                argumentoRepetido.push(argumento);
            }
        }
    });

    console.log("El número total de argumentos repetidos es: " + contador);
    console.log("Array sin argumentos repetidos: " + [...arraySinRepetidos]); // CONVIERTO EL SET EN UN ARRAY
    console.log("Argumentos repetidos: " + argumentoRepetido);
    console.log("\n");
}

let arrayNombres = ["Pepe", "Juan", "Mario", "Pepe", "Jose", "Federico"];
let arrayNumeros = [1, 2, 3, 4, 2, 5, 1, 6, 7, 8, 9, 8, 10];

eliminarRepetidos(arrayNombres);
eliminarRepetidos(arrayNumeros);