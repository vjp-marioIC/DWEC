// PARTE DEL EJERCICIO 1
var persona = {
    nombre: "Marta",
    edad: 23,
    trabajos: [
        {
            descripcion: "Payasos del circo",
            duracion: "2003-2005"
        },
        {
            descripcion: "Sexador de pollos",
            duracion: "2005-2019"
        }
    ],

    getInfo() {
        let cadenaDevuelta = "Mi nombre es " + this.nombre + " y tengo " + this.edad + " años" + "\n"
    
        this.trabajos.forEach(element => {
            cadenaDevuelta += " - " + element.descripcion + " -> " + element.duracion + "\n";

        });

        return cadenaDevuelta;
        }
}
/*
console.log(persona.getInfo());
console.log(persona.trabajos[1].descripcion);
*/

console.log(persona.getInfo());