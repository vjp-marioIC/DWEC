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

// PRUEBA 6.1
/*
let head = document.head;

//console.log(head.childNodes); // Devuelve una colección de hijos nodes del elemento dado donde el primer nodo hijo es asignado un índice 0.
//console.log(head.children); // Contiene todos los elementos secundarios del elemento en el que se llamó.
//console.log(head.parentNode); // Devuelve el padre del nodo especificado en el árbol.
//console.log(head.nextSibling); // Devuelve el siguiente nodo con respecto al indicado en la lista de nodos a la que este pertenece o null si el nodo especificado es el último en dicha lista.
//console.log(head.previousSibling); // Devuelve el contenido HTML del hermano anterior de un elemento
//console.log(head.nextElementSibling); // Devuelve el elemento posterior al especificado, dentro de la lista de elementos hijos de su padre, o bien null si el elemento especificado es el último en dicha lista.
//console.log(head.previousElementSibling); // Retorna el elemento predecesor al especificado dentro de la lista de hijos de su padre, o bien null si el elemento especificado es el primero de dicha lista.
*/
// PRUEBA 6.2
/*
let nodoBody = document.createElement("p");
let textoNodo = document.createTextNode("Este es el párrafo final");

nodoBody.appendChild(textoNodo);
document.body.appendChild(nodoBody);
*/
// PRUEBA 7
// 1)
let elementosP = document.getElementsByTagName("p");

console.log(elementosP);
console.log("#############################################");

// 2)
for (var i = 0; i < elementosP.length; i++) {
    console.log(elementosP[i]);
}
console.log("#############################################");

// 3)
for (var i = 0; i < elementosP.length; i++) {
    if (elementosP[i].getElementsByTagName("parrafos")) {
        elementosP[i].remove();
    } 
}

// 4)
for (var i = 0; i < elementosP.length; i++) {
    console.log(elementosP[i]);
}