// PRUEBA 1
/*
console.log(window.outerWidth + "-" +window.outerHeight);

window.open("https://www.google.com");

console.log(window.screen.width + " - " + window.screen.height);
console.log(window.screen.availWidth + " - " + window.screen.availHeight);

console.log(window.navigator.userAgent);

var variable = "Hola";
console.log(window.variable);
console.log(history.length);

window.navigator.geolocation.getCurrentPosition(function (posicion) {
    console.log("Latitud: " + posicion.coords.latitude + " Longitud: " + posicion.coords.longitude);
});
*/
// PRUEBA 2
/*
console.log("1. " + new Date().toString());
setTimeout(() => console.log("2. " + new Date().toString()), 2000);
console.log("3. " + new Date().toString());
*/
/*
let id = setTimeout(() => console.log("2. " + new Date().toString()), 5000);
confirm("Quieres pararla") ? clearTimeout(id) : true;
*/

// PRUEBA 3
/*
let num = 1;
let idInterval = setInterval(function() {
    console.log(num++);

    if (num > 10) {
        clearInterval(idInterval);
    }
}, 1000);
*/
// PRUEBA 4
/*
function multiply(num1, num2) {
    console.log(num1 * num2);
}
setTimeout(multiply, 3000, 5, 7);
*/
/*
console.log(location.href);
console.log(location.host);
console.log(location.port);
console.log(location.protocol);
*/
/*
location.reload();
location.assign("https://google.com");
location.replace("https://google.com");
*/
/*
console.log(history.length);
history.back();
history.forward();
history.go(2);
*/
// PRUEBA 6
//console.log(document.documentElement); // MUESTRA EL <html>. Devuelve el Element que es el elemento raíz de document
//console.log(document.head); // MUESTRA EL <head>. Devuelve el elemento <head> del documento actual
//console.log(document.body); // MUESTRA EL <body>. Es el elemento que contiene el contenido para el documento
//console.log(document.getElementById("titulo1")); // MUESTRA null. Selecciona un elemento del documento por medio del valor del atributo id que se le haya asignado.
//console.log(document.getElementsByClassName("parrafos")); // MUESTRA HTMLCollection []. Devuelve elementos con la clase dada
//console.log(document.getElementsByName("html tag")); // MUESTRA NodeList []. Inicia la búsqueda en un elemento específico dentro del árbol DOM