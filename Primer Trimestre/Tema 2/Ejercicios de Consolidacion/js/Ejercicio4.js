//PIDO UNA CADENA AL USUARIO
let cadena = prompt("Introduzca una cadena:");

function analizarCadena(cadena) {
    //CUENTA EL NÚMERO DE CARACTERES DE LA CADENA
    console.log(cadena.length);

    //CUENTA EL NÚMERO DE VOCALES QUE HAY
    console.log(cadena.search(/[aeiou]/));

    //EMPIEZA POR 'A'
    console.log(cadena.startsWith("A"));
}

//LLAMO A LA FUNCIÓN analizarCadena
analizarCadena(cadena);