//CLASE COCINA
class PlatoCocina {
    //CONSTRUCTOR PARAMETRIZADO
    constructor(nombrePlato, duracionMinutos, dificultad) {
        this.nombrePlato = nombrePlato;
        this.duracionMinutos = duracionMinutos;
        this.dificultad = dificultad;
    }

    toString() {
        return "El plato " + this.nombrePlato + " tiene una duración de " + this.duracionMinutos + " minutos con dificultad " + this.dificultad+ ".";
    }
}

//#################################### OBJETOS ####################################

//PLATOS
let plato1 = new PlatoCocina("Paella", 30, 2);
let plato2 = new PlatoCocina("Pollo asado", 45, 1);
let plato3 = new PlatoCocina("Cochinillo frito", 15, 3);

//MAPA PARA ALMECENAR LOS PLASTOS Y LOS INGREDIENTES
let mapaPlatosIngredientes = new Map();

//CREO UN ARRAY PARA CADA PLATO Y DENTRO ALMACENO LOS INGREDIENTES
let ingredientesPlato1 = ["arroz", "colorante", "marisco."];
let ingredientesPlato2 = ["pollo", "sal", "ajo", "limón."];
let ingredientesPlato3 = ["cochinillo", "acete", "sal."];

//ASOCIO EN UN MAPA CADA PLATO CON SUS INGREDIENTES
mapaPlatosIngredientes.set(plato1, ingredientesPlato1);
mapaPlatosIngredientes.set(plato2, ingredientesPlato2);
mapaPlatosIngredientes.set(plato3, ingredientesPlato3);

//#################################### FUNCIÓN ####################################

//FUNCIÓN PARA RECORRER EL MAPA DE PLATOS
function imprimirMapa(mapaPlatosIngredientes) {
    for (let [plato, ingredientes] of mapaPlatosIngredientes) {
        console.log(plato.toString());
        console.log("Ingredientes: " + ingredientes.join(", "));
        console.log("\n");
    }
}

//LLAMO A LA FUNCIÓN PARA QUE MUESTRE LOS PLATOS
imprimirMapa(mapaPlatosIngredientes);