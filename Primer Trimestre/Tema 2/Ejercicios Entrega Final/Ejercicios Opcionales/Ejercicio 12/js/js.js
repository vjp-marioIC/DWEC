// CLASE ESTUDIANTE
class Estudiante {
    // CONSTRUCTOR PARAMETRIZADO
    constructor(nombreEstudiante, notas) {
        this.nombreEstudiante = nombreEstudiante;
        this.notas = notas; // ESTO ES UNA ARAY
    }

    // FUNCIÓN PARA CALCULAR LA NOTA MEDIA
    calcularNotaMedia() {
        let totalNotas = this.notas.reduce((sumaDeNotas, nota) => sumaDeNotas + nota, 0);

        return totalNotas / this.notas.length;
    }

    toString() {
        let mediaRedondeada = Math.round(this.calcularNotaMedia());

        return "El estudiante " + this.nombreEstudiante + " tiene una nota media de un " + mediaRedondeada + ".";
    }
}

// #################################### OBJETOS ####################################

// ESTUDIANTES
let estudiante1 = new Estudiante("Juan", [3, 5, 9, 7]);
let estudiante2 = new Estudiante("Pepe", [9, 5, 10, 8]);
let estudiante3 = new Estudiante("Pedro", [4, 9, 2, 6]);
let estudiante4 = new Estudiante("Federico", [10, 7, 4, 8]);

// MAPA PARA ALMACENAR LOS ESTUDIANTES Y SUS NOTAS
let mapaEstudiantesNotas = new Map();

// ASOCIO EN UN MAPA CADA ESTUDIANTE CON SUS NOTAS
mapaEstudiantesNotas.set(estudiante1.nombreEstudiante, estudiante1.notas);
mapaEstudiantesNotas.set(estudiante2.nombreEstudiante, estudiante2.notas);
mapaEstudiantesNotas.set(estudiante3.nombreEstudiante, estudiante3.notas);
mapaEstudiantesNotas.set(estudiante4.nombreEstudiante, estudiante4.notas);

// #################################### FUNCIONES ####################################

// a) Función que calcula la media aritmética de un array de enteros y también imprime el nombre del estudiante con su media
function mediaAritmetica(...estudiantes) {
    estudiantes.forEach(estudiante => {
        console.log(estudiante.toString());
    });
}

// FUNCIÓN QUE MUESTRA EL ESTUDIANTE CON MEJOR NOTA MEDIA Y LA NOTA
function mejorNotaMediaEstudiante(mapaEstudiantesNotas) {
    let estudianteMejorNota = null;

    for (let [nombre, notas] of mapaEstudiantesNotas) {
        let estudiante = new Estudiante(nombre, notas);

        if (estudianteMejorNota === null || estudiante.calcularNotaMedia() > estudianteMejorNota.calcularNotaMedia()) {
            estudianteMejorNota = estudiante;
        }
    }

    console.log("ESTUDIANTE CON MEJOR NOTA MEDIA:");
    console.log("---------------------------------");
    console.log(estudianteMejorNota.toString());
}

// FUNCION QUE MUESTRA LOS ESTUDIANTES ORDENADOS POR SU NOTA MEDIA
function ordenarPorNotaMedia(mapaEstudiantesNotas) {
    let estudiantes = [];

    for (let [nombre, notas] of mapaEstudiantesNotas.entries()) {
        estudiantes.push(new Estudiante(nombre, notas));
    }

    // ORDENO LOS ESTUDIANTES DE MAYOR A MENOR
    estudiantes.sort((estudiante1, estudiante2) => estudiante2.calcularNotaMedia() - estudiante1.calcularNotaMedia());

    console.log("ESTUDIANTES ORDENADOS DE MAYOR A MENOR POR NOTA:");
    console.log("----------------------");

    // MUESTRO LOS ESTUDIANTES
    estudiantes.forEach(estudiante => {
        console.log(estudiante.toString());
    });
}

mediaAritmetica(estudiante1, estudiante2, estudiante3, estudiante4);
console.log("\n");

mejorNotaMediaEstudiante(mapaEstudiantesNotas);
console.log("\n");

ordenarPorNotaMedia(mapaEstudiantesNotas);