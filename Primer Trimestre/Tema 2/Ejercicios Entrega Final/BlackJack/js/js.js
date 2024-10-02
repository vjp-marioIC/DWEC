let tipoCarta = ['Corazones', 'Picas', 'Tréboles', 'Diamantes'];
let numeroCarta = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jota', 'Reina', 'Rey', 'As'];

let mazo = [];
let cartasJugador = [];
let cartasMaquina = [];

let jugando = true;

// FUNCIÓN PARA CREAR LA BARAJA DE CARTAS
function crearBaraja() {
    let baraja = [];

    for (let carta of tipoCarta) {
        for (let num of numeroCarta) {
            baraja.push([carta, num]);
        }
    }
    return baraja;
}

// FUNCIÓN QUE CALCULA EL VALOR DE LAS CARTAS
function calcularValorCartas(arrayCartas) {
    let valor = 0;
    let ases = 0;

    arrayCartas.forEach(carta => {
        if (carta[1] === 'Jota' || carta[1] === 'Reina' || carta[1] === 'Rey') {
            valor += 10;
        } else if (carta[1] === 'As') {
            ases += 1;
            valor += 11;
        } else {
            valor += carta[1];
        }
    });

    while (valor > 21 && ases > 0) {
        valor -= 10;
        ases -= 1;
    }

    return valor;
}

// FUNCIÓN PARA BARAJAR LAS CARTAS
function barajarCartas(arrayCartas) {
    for (let i = arrayCartas.length - 1; i > 0; i--) { //COMIENZO DESDE LA ÚLTMIA CARTA
        let j = Math.floor(Math.random() * (i + 1));

        [arrayCartas[i], arrayCartas[j]] = [arrayCartas[j], arrayCartas[i]];  // INTERCAMBIO LAS CARTAS
    }
    return arrayCartas;
}

// FUNCIÓN PARA ACTUALIZAR LA INFORMACIÓN DEL JUGADOR
function actualizarEstadoJugador() {
    let playerCardsElement = document.getElementById('cartasJugador');
    let playerStatusElement = document.getElementById('puntosJugador');
    let valorJugador = calcularValorCartas(cartasJugador);

    playerCardsElement.textContent = JSON.stringify(cartasJugador); // CONVIERTO EL ARRAY EN (STRING)
    playerStatusElement.textContent = valorJugador;
}

// FUNCIÓN PRA ACTUALIZAR LA INFORMACIÓN DE LA MÁQUINA
function actualizarInformacionMaquina() {
    let machineCardsElement = document.getElementById('cartasMaquina');
    let machineStatusElement = document.getElementById('puntosMaquina');
    let valorMaquina = calcularValorCartas(cartasMaquina);

    machineCardsElement.textContent = JSON.stringify(cartasMaquina); // CONVIERTO EL ARRAY EN (STRING)
    machineStatusElement.textContent = valorMaquina;
}

// FUNCIÓN PEDIR UNA CARTA EN EL TURNO DEL JUGADOR
function clickPedirCarta() {
    if (!jugando) return; // SI JUGANDO ES FALSO (SALGO)

    if (mazo.length === 0) {
        document.getElementById('resultados').textContent = "No hay más cartas en el mazo.";
        return;
    }

    let carta = mazo.pop(); // ALMACENO LA ÚLTIMA CARTA DEL DE AL BARAJA

    cartasJugador.push(carta);
    actualizarEstadoJugador();

    let valorJugador = calcularValorCartas(cartasJugador);

    if (valorJugador > 21) {
        document.getElementById('resultados').textContent = "Te has pasado de 21. ¡La máquina ha ganado!";
        jugando = false;

        setTimeout(preguntarSiJugarOtraVez, 500);
    }
}

// FUNCIÓN QUE AL PLANTARSE LE TOCA A LA MAQUINA
function clickPlantarse() {
    if (!jugando) return; // SI JUGANDO ES FALSO (SALGO)

    let valorJugador = calcularValorCartas(cartasJugador);
    let valorMaquina = 0;

    while ((valorMaquina < valorJugador) && (valorMaquina <= 21) && (mazo.length > 0)) {
        let carta = mazo.pop(); // ALMACENO LA ÚLTIMA CARTA DEL DE AL BARAJA

        cartasMaquina.push(carta);
        valorMaquina = calcularValorCartas(cartasMaquina);
    }

    actualizarInformacionMaquina();
    ganador();
}

// FUNCIÓN PARA SABER QUIEN ES EL GANADOR
function ganador() {
    let valorJugador = calcularValorCartas(cartasJugador);
    let valorMaquina = calcularValorCartas(cartasMaquina);

    if (valorMaquina > 21) {
        document.getElementById('resultados').textContent = "La máquina ha perdido por que se ha pasado de 21. ¡Tú has ganado!";
    } else if (valorMaquina >= valorJugador) {
        document.getElementById('resultados').textContent = "¡La máquina ha ganado!";
    } else {
        document.getElementById('resultados').textContent = "¡Tú has ganado!";
    }

    jugando = false;
    setTimeout(preguntarSiJugarOtraVez, 500);
}

// FUNCIÓN PARA INICIAR EL JUEGO
function iniciarJuego() {
    mazo = barajarCartas(crearBaraja());
    cartasJugador = [];
    cartasMaquina = [];
    jugando = true;

    document.getElementById('resultados').textContent = '';
    actualizarEstadoJugador();
    actualizarInformacionMaquina();
}

// FUNCIÓN PARA PREGUNTAR AL JUGADOR SI QUIERE JUGAR
function preguntarSiQuiereJugar() {
    let respuesta = prompt("¿Quieres jugar al Black Jack? (S/N)");

    if (respuesta.toUpperCase() === 'S') {
        iniciarJuego();
    } else {
        document.getElementById('resultados').textContent = "Has salido del juego, gracias por jugar. ¡Hasta la próxima!";
    }
}

// FUNCIÓN QUE PREGUNTA AL JUGADOR SI QUIERE SEGUIR JUGANDO
function preguntarSiJugarOtraVez() {
    let respuesta = prompt("¿Quieres jugar otra vez? (S/N)");

    if (respuesta.toUpperCase() === 'S') {
        iniciarJuego();
    } else {
        document.getElementById('resultados').textContent = "Has salido del juego, gracias por jugar. ¡Hasta la próxima!";
    }
}

document.getElementById('botonPedirCarta').addEventListener('click', clickPedirCarta);
document.getElementById('botonPlantarse').addEventListener('click', clickPlantarse);

// INICIA EL JUEGO
preguntarSiQuiereJugar();