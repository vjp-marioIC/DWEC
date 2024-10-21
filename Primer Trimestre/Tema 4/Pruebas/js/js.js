// PRUEBA 1
/*
var obj = new Object();
obj.nombre = "Pedro";
obj["edad"] = 41;
obj.getInfo = function () {
    return "Mi nombre es " + this.nombre +  " y tengo " + this.edad + " años."
}

console.log(obj.getInfo());
console.log(obj.nombre);
console.log(obj["nombre"]);

var prop = "nombre";
console.log(obj[prop]);

// PRUEBA 1.2
var obj2 = {
    nombre: "Paco",
    edad: 32,

    getInfo() {
        return "Mi nombre es " + this.nombre +  " y tengo " + this.edad + " años."
    }
};

console.log(obj2.getInfo());
console.log(obj2.nombre);
console.log(obj2["nombre"]);

var prop2 = "nombre";
console.log(obj2[prop2]);


// PRUEBA 2
// CLASE (Usuario)
class Usuario {
    constructor(nombre) {
        this.nombre = nombre;
        this.tipo = 1;
    }

    saludo() {
        console.log("Hola, soy " + this.nombre);
    }

    decirTipo() {
        console.log("Soy un usuario de tipo " +this.tipo);
    }
}

// CLASE (Administrador)
class Administrador extends Usuario {
    constructor(nombre) {
        super(nombre);
        this.tipo = 2;
    }

    decirTipo() {
        super.decirTipo();

        console.log("Y también soy un administrador");
    }
}

let admin = new Administrador("Antonio");

admin.saludo();
admin.decirTipo();
*/
// PRUEBA 3
let peticionAjax = new XMLHttpRequest();

peticionAjax.addEventListener("readystatechange", procesarPeticion);
peticionAjax.open("GET", "https://raw.githubusercontent.com/fsangar/backupOpendataCCJSON/master/monumentos.json");
peticionAjax.send();

/*
let peticionAjax2 = new XMLHttpRequest();
let urlPeticion = "http://opendata.caceres.es/GetData/GetData";
let urlParametros = "?dataset=om:Monumento&format=json";

peticionAjax2.open("GET", urlPeticion + urlParametros);
peticionAjax2.send();
*/
function procesarPeticion(evento) {
    if (this.readyState == 4 && this.status == 200) {
        //console.log(this.responseText);
        let objetoResultado = JSON.parse(this.responseText);

        precesarResultado(objetoResultado);
    }
}

function pintarInfoMonumento(objetoResultado) {
    let cadenaDevuelta = "";
    
    cadenaDevuelta += "Nombre " + objetoResultado.rdfs_label.value + "\n";
    cadenaDevuelta += "Tipo monumento  " + objetoResultado.om_tipoMonumento.value + "\n";
    cadenaDevuelta += "Latitud " + objetoResultado.geo_lat.value + "\n";
    cadenaDevuelta += "Longitud " + objetoResultado.geo_long.value + "\n";
    cadenaDevuelta += "Uri " + objetoResultado.uri.value + "\n";
    
    return cadenaDevuelta;
}

function precesarResultado(objetoResultado) {
    for(let monumento of objetoResultado.results.bindings) {
        console.log(pintarInfoMonumento(monumento));
    };
}