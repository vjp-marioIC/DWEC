// CLASE ESTUDIANTE
class Estudiante {
    // CONSTRUCTOR PARAMETRIZADO
    constructor(nombreEstudiante, notas) {
        this.nombreEstudiante = nombreEstudiante;
        this.notas = notas;
    }

    calcularMedia() {
        let suma = this.notas.reduce((acc, nota) => acc + nota, 0);
        return suma / this.notas.length;
    }

    toString() {
        return "Estudiante: " + this.nombreEstudiante + ".  Media: " + this.calcularMedia().toFixed(2)};
    }
}

// #################################### OBJETOS ####################################

// ESTUDIANTES
let estudiante1 = new Estudiante("Juan", [80, 90, 85]);
let estudiante2 = new Estudiante("Ana", [75, 80, 78]);
let estudiante3 = new Estudiante("Pedro", [90, 95, 92]);
let estudiante4 = new Estudiante("María", [70, 85, 88]);

// MAPA PARA ALMACENAR LOS ESTUDIANTES Y SUS NOTAS
let mapaEstudiantesNotas = new Map();

// ASOCIO EN UN MAPA CADA ESTUDIANTE CON SUS NOTAS
mapaEstudiantesNotas.set(estudiante1, estudiante1.notas);
mapaEstudiantesNotas.set(estudiante2, estudiante2.notas);
mapaEstudiantesNotas.set(estudiante3, estudiante3.notas);
mapaEstudiantesNotas.set(estudiante4, estudiante4.notas);

// #################################### FUNCIÓN ####################################

// FUNCIÓN PARA RECORRER EL MAPA DE ESTUDIANTES
function imprimirMapa(mapaEstudiantesNotas) {
    for (let [estudiante, notas] of mapaEstudiantesNotas) {
        console.log(estudiante.toString());
        console.log("Notas: " + notas.join(", "));
        console.log("\n");
    }
}

// LLAMO A LA FUNCIÓN PARA QUE MUESTRE LOS ESTUDIANTES
imprimirMapa(mapaEstudiantesNotas);
