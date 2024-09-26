// FUNCIÓN QUE SE LE PASA UN ARRAY
function arrayNumeroCadenaOtro(array) {
    let contadorNumeros = 0;
    let contadorCadenas = 0;
    let contadorOtrosElementos = 0;
    
    array.forEach(element => {
        if (typeof element === 'number') {
            contadorNumeros++;
        } else 
            if (typeof element === 'string') {
                contadorCadenas++;
            } else {
                contadorOtrosElementos++;
        }
    });

    console.log(array);
    console.log("Número de elementos de tipo número: " + contadorNumeros);
    console.log("Número de elementos de tipo cadena: " +contadorCadenas);
    console.log("Número de elementos que no son número ni cadena: " + contadorOtrosElementos);
    console.log("--------------------------------------------------");
}

//CREO DOS ARRAYS
let array = ["casa", 23, "a"];
let array2 = ["casa", 23, 12, 41];
let array3 = ["casa", 23, 12, {nombre: "Pedro"}];

arrayNumeroCadenaOtro(array);
arrayNumeroCadenaOtro(array2);
arrayNumeroCadenaOtro(array3);