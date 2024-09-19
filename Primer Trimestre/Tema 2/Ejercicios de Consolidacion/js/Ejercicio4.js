//PIDO UNA CADENA AL USUARIO
let cadena = prompt("Introduzca una cadena:");

function analizarCadena(cadena) {
    //CUENTA EL NÚMERO DE CARACTERES DE LA CADENA
    console.log("Número de caracteres: " + cadena.length);

    //CUENTA EL NÚMERO DE VOCALES QUE HAY
    console.log("Número de vocales : " + cadena.match(/[aeiou]/gi).length);

    //EMPIEZA POR 'A'
    let cadenaEmpiezaPor = cadena.startsWith("A");

    if (cadenaEmpiezaPor == true) {
        console.log("Empieza por A.");
    } else {
        console.log("No empieza por A.");
    }
}

//LLAMO A LA FUNCIÓN analizarCadena
analizarCadena(cadena);