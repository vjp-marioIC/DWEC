// VARIABLES
let tablaRestaurantes = document.getElementById("tabla");
let botonCargarRestaurantes = document.getElementById("botonCargarRestaurantes");

// ##################################################################################################################################
// ##################################################################################################################################
function cargarRestaurantes() {
    let peticionAjax = new XMLHttpRequest();

    peticionAjax.addEventListener("readystatechange", procesarPeticion);
    peticionAjax.open("GET", "https://raw.githubusercontent.com/fredericsangar/backupOpendataCCJSON/master/restaurantes.json");
    peticionAjax.send();
}

// ##################################################################################################################################
// ##################################################################################################################################

function procesarPeticion(evento) {
    if (this.readyState == 4 && this.status == 200) {
        let objetoResultado = JSON.parse(this.responseText);
    
         precesarResultado(objetoResultado);
    }
}

function pintarInforestaurante(contador, objetoResultado) {
    let nuevoTr = document.createElement("tr");

    nuevoTr.innerHTML = "<td>" + contador + "</td>" +
                        "<td>" + pintarConRest(objetoResultado, 'rdfs_label') + "</td>" +
                        "<td>" + pintarConRest(objetoResultado, 'schema_url') + "</td>" +
                        "<td>" + pintarConRest(objetoResultado, 'schema_address_streetAddress') + "</td>" +
                        "<td>" + pintarConRest(objetoResultado, 'om_capacidadPersonas') + "</td>";

    tablaRestaurantes.appendChild(nuevoTr);
}

function precesarResultado(objetoResultado) {
    let contador = 0;

    for(let restaurante of objetoResultado.results.bindings) {
        contador++;

        pintarInforestaurante(contador, restaurante);
    };
}

function pintarConRest(restaurante, propiedad){
    return restaurante[propiedad] ? restaurante[propiedad].value : '...';
}

botonCargarRestaurantes.addEventListener("click", cargarRestaurantes);