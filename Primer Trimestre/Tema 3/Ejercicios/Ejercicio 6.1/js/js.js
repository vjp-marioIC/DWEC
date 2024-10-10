let contenedorGeneral = document.getElementById("contenedorGeneral");

//FUNCIÓN PARA CREAR LOS DIV
function creaCaja() {
    let caja = document.createElement("button");

    caja.style.width = "25px";
    caja.style.height = "25px";
    caja.style.margin = "10px";

    return caja;
}

// FUNCIÓN PARA CAMBIAR EL COLOR
function cambiarColor(boton) {
    if (boton.button === 0) {
        switch (boton.target.style.backgroundColor) {
            case "red":
                boton.target.style.backgroundColor = "blue";
                break;
            case "blue":
                boton.target.style.backgroundColor = "green";
                break;
            case "green":
                boton.target.style.backgroundColor = "yellow";
                break;
            default:
                boton.target.style.backgroundColor = "red";
                break;
        }
    } else {
        if (boton.button === 2) {
            switch (boton.target.style.backgroundColor) {
                case "red":
                    boton.target.style.backgroundColor = "yellow";
                    break;
                case "yellow":
                    boton.target.style.backgroundColor = "green";
                    break;
                case "green":
                    boton.target.style.backgroundColor = "blue";
                    break;
                default:
                    boton.target.style.backgroundColor = "red";
                    break;
            }
            boton.preventDefault();
        } else {
            boton.target.style.backgroundColor = "gray";
        }
    }
}

//CREO LA MATRIZ DE 10 X 10
for (let index = 0; index < 10; index++) {
    for (let index = 0; index < 10; index++) {
        let caja = creaCaja();

        caja.addEventListener("click", cambiarColor);
        caja.addEventListener("auxclick", cambiarColor);

        contenedorGeneral.appendChild(caja);
    }

    contenedorGeneral.appendChild(document.createElement("br")); // SALTO DE LÍNEA
}