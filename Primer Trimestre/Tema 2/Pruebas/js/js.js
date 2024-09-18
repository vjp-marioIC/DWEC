//PRUEBA
/*
alert("Bienvenida");

let nombre = prompt("Introduce tu nombre: ");
document.write("<h1> Bienvenido " + nombre+ "</h1>");

console.log("Bienvenido " + nombre);
*/
//PRUEBA 1
/*
let nombre = "Jesús";
var altura = 180;

console.log(nombre);
console.log(typeof nombre);
console.log("----------------");

console.log(altura);
console.log(typeof altura);
console.log("----------------");

altura = "Uno con Ochenta";

console.log(altura);
console.log(typeof altura);
*/
//PRUEBA 2
/*
console.log(nombre);

let edad;
console.log(edad);
*/

//PRUEBA 3
/*
function saludoBienvenida(nombre) {
    console.log("Bienvenido, " + nombre);
}

saludoBienvenida("Paco");
saludoBienvenida();
saludoBienvenida("Paco", "Pepe", "Marcos");
*/
//PRUEBA 4
/*
function calcularPrecio(numUnidades, precioUnidad) {
    return precioFinal = numUnidades * precioUnidad;
}

console.log(calcularPrecio(5, 2));
*/
//PRUEBA 5
/*
let funcionSumarUnoMas = function(valor) {
    return valor++;
    //return ++valor;
}

console.log(funcionSumarUnoMas(4));
*/
//PRUEBA 6
let funcionLambda = (arg1, arg2) => {return arg1 + arg2}

console.log(funcionLambda(3, 2));

let funcionProcesadorPar = function (arg1, arg2, funcionProcesadora) {
    return funcionProcesadora(arg1, arg2);
}

console.log("Esta vez procesamos una función (de 3 y 2): " + funcionProcesadorPar(3, 2, (n1, n2) => {return n1+ n2}));

console.log("Esta vez procesamos una función (de 3 y 2): " + funcionProcesadorPar(3, 2, (n1, n2) => n1+n2));