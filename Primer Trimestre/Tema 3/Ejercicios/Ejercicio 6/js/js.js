/*
document.addEventListener("DOMContentLoaded", main);

function main() {
    
    // Añadiremos los lsiteners:
    document.getElementById("divRojo").addEventListener(
        "click",
        (evento)=> {console.log("Pulsaste el divRojo")}
    );

    document.getElementById("divAzul").addEventListener(
        "click",
        (evento)=> {console.log("Pulsaste el divAzul")}
    );
}
*/
/*
document.addEventListener("DOMContentLoaded", main);

function main() {
    
    // Añadiremos los lsiteners:
    document.getElementById("divRojo").addEventListener(
        "click",
        (evento)=> {console.log("Pulsaste el divRojo")},
        true // EJERCICIO 6 MODIFICACIÓN
    );

    document.getElementById("divAzul").addEventListener(
        "click",
        (evento)=> {console.log("Pulsaste el divAzul")}
    );
}
*/
// PARA EL AZUL
/*
document.addEventListener("DOMContentLoaded", main);

function main() {
    
    // Añadiremos los lsiteners:
    document.getElementById("divRojo").addEventListener(
        "click",
        (evento)=> {console.log("Pulsaste el divRojo")
        }
    );

    document.getElementById("divAzul").addEventListener(
        "click",
        (evento)=> {
            console.log("Pulsaste el divAzul");
            evento.stopPropagation()
        }
    );
}
*/
// PARA EL ROJO
document.addEventListener("DOMContentLoaded", main);

function main() {
    
    // Añadiremos los lsiteners:
    document.getElementById("divRojo").addEventListener(
        "click",
        (evento)=> {
            console.log("Pulsaste el divRojo");
            evento.stopPropagation()
        },
        true
    );

    document.getElementById("divAzul").addEventListener(
        "click",
        (evento)=> {
            console.log("Pulsaste el divAzul")}
    );
}