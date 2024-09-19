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
/*
let funcionLambda = (arg1, arg2) => {return arg1 + arg2}

console.log(funcionLambda(3, 2));

let funcionProcesadorPar = function (arg1, arg2, funcionProcesadora) {
    return funcionProcesadora(arg1, arg2);
}

console.log("Esta vez procesamos una función (de 3 y 2): " + funcionProcesadorPar(3, 2, (n1, n2) => {return n1+ n2}));

console.log("Esta vez procesamos una función (de 3 y 2): " + funcionProcesadorPar(3, 2, (n1, n2) => n1+n2));

console.log("------------------------------------------------------------");
*/

//PRUEBA 6.2
/*
let procesaTres = function(arg1, arg2, arg3, funcionProcesadora) {
    return funcionProcesadora(arg1, arg2, arg3);
}

//A
let funcionSumaTres = function (arg1, arg2, arg3, funcionProcesadora) {
    return funcionProcesadora(arg1, arg2, arg3);
}

console.log("Suma de los tres argumentos: " + funcionSumaTres(1, 1, 1, (n1, n2, n3) => {return n1+n2+n3}));

//B
let funcionRetornaMayor = function (arg1, arg2, arg3, funcionProcesadora) {
    return funcionProcesadora(arg1, arg2, arg3);
}

console.log("Retorna el mayor los tres argumentos: " + funcionRetornaMayor(1, 4, 2, (n1, n2, n3) => {
    if ((n1 > n2)&&(n1 > n3)) {
        return n1;
    } else {
        if ((n2 > n1)&&(n2 > n3)) {
            return n2;
        }else {
            if ((n3 > n1)&&(n3 > n1)) {
                return n3;
            }
        }
    }
}));

//C
let funcionRetornaMenor = function (arg1, arg2, arg3, funcionProcesadora) {
    return funcionProcesadora(arg1, arg2, arg3);
}

console.log("Retorna el menor de los tres argumentos: " + funcionRetornaMenor(1, 4, 2, (n1, n2, n3) => {
    if ((n1 < n2)&&(n1 < n3)) {
        return n1;
    } else {
        if ((n2 < n1)&&(n2 < n3)) {
            return n2;
        }else {
            if ((n3 < n1)&&(n3 < n1)) {
                return n3;
            }
        }
    }
}));

//D
let funcionOperacion = function (arg1, arg2, arg3, funcionProcesadora) {
    return funcionProcesadora(arg1, arg2, arg3);
}

console.log("Operación: " + funcionOperacion(1, 1, 1, (n1, n2, n3) => {return (n1+n3)/n2}));
*/

//PRUEBA 7
/*
function cambiarContenido(a, b, c) {
    a = a * 10;
    b.item= "cambiar";
    c = {item: "cambiar"};
}

var num = 10;
var obj1 = {item: "inicial"};
var obj2 = {item: "inicial"};

cambiarContenido(num, obj1, obj2);

console.log(num);
console.log(obj1.item);
console.log(obj2.item);
*/

//PRUEBA 8
/*
function calcularPrecioInpuesto(valor, impuesto = 10) {
    return valor + impuesto;
}

console.log("Producto de 100€, sin entrada de impuesto: " + calcularPrecioInpuesto(100));
console.log("Producto de 100€, con 30€ de impuesto: " + calcularPrecioInpuesto(100, 30));
*/

//PRUEBA 12
/*
let a = 3;
let b = "asdf";
let c = 3;
let d = "12";

console.log(a * b);

console.log(c * d);
console.log(c + d);
console.log(c + +d);
*/