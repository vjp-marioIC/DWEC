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