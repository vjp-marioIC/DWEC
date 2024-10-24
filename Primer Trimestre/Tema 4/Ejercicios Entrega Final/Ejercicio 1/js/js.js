// OBJETO DISCO DE MÚSICA 

let discoMusica = {
    titulo: "Titulo1",
    autor: "Federico",
    yearPublicacion: 1999,
    numVentas: 500,

    getInfo() {
        return "Dico Música:\n------------\nTitulo: " + this.titulo + ",\nAutor: " + this.autor + ",\nAño Publicación: " + this.yearPublicacion + ",\nNúmero de ventas: " + this.numVentas + ".";
    }
};

console.log(discoMusica.getInfo());
console.log("###############################################################");

// OBJETO CALLE CIUDAD 
let calleCiudad = {
    nombre: "Plasencia",
    longitud: 200,
    arrayEstablecimientos: [
        {
            nombre: "Establecimiento 1"
        },
        {
            nombre: "Establecimiento 2"
        },
        {
            nombre: "Establecimiento 3"
        }
    ],

    getInfoCalle() {
        let cadena = "Ciudad:\n-------\nNombre: " + this.nombre + ",\nLongitud: " + this.longitud + ",\nEstablecimientos: ";

        //ME RECORRO EL ARRAY DE listaEstableciientos
        this.arrayEstablecimientos.forEach(element => {
            cadena = cadena + "\n\t" + element.nombre;
        });

        return cadena;
    }
};

console.log(calleCiudad.getInfoCalle());
console.log("###############################################################");

// OBJETO CALLE COCHE
let coche = {
    modelo: "seat",
    dueño: {
        nombre: "Juan",
        edad: 30
    },
    marca: [
        {
            nombre: "Ibiza",
            yearCreacion: 1984
        }
    ],

    getInfoCoche() {
        let cadenaCoche = "Coche:\n-------\nModelo: " + this.modelo + ",\nMarca: ";

        this.marca.forEach(element => {
            cadenaCoche = cadenaCoche + "\n\tNombre: " + element.nombre + "\n\tAño: " + element.yearCreacion;
        });

        return cadenaCoche;
    }
};

console.log(coche.getInfoCoche());
console.log("###############################################################");

// OBJETO CALLE COCHE