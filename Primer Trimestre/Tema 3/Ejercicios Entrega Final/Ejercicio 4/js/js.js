document.addEventListener("DOMContentLoaded", function () {

    // VARIABLES
    let form = document.getElementById("formulario");

    let divPadre = document.getElementById("divPadre");
    let nombreInput = document.getElementById("nombre");
    let diaInput = document.getElementById("dia");
    let mesInput = document.getElementById("mes");
    let añoInput = document.getElementById("año");

    // FUNCION PARA GENERAR UNA IMAGEN ALEATORIA
    function crearImgAleatoria() {
        let img = document.createElement("img");
        let numImagen = Math.floor(Math.random() * 10) + 1;

        img.src = "img/avatar" + numImagen + ".png";
        img.alt = "Imagen aleatoria";
        img.width = 200;
        img.height = 200;

        return img;
    }

    // FORMULARIO
    form.addEventListener("submit", function (event) {
        // EVITO QUE LA PÁGINA SE RECARGUE
        event.preventDefault();

        // VALIDACIÓN DEL NOMBRE
        let textoInputNombre = nombreInput.value.trim();
        let ristraNombre = /^[A-Z][a-z]*$/;

        if (!ristraNombre.test(textoInputNombre)) {
            alert("El campo nombre es obligatorio y debe empezar por mayúscula.");
            return;
        }

        // ###################################################################################
        // ###################################################################################

        // VALIDACIÓN DEL DÍA
        let textoInputDia = parseInt(diaInput.value.trim());

        if (isNaN(textoInputDia) || textoInputDia < 1 || textoInputDia > 31) {
            alert("El campo día es obligatorio y debe contener un valor entre 1 y 31.");
            return;
        }

        // ###################################################################################
        // ###################################################################################

        // VALIDACIÓN DEL MES
        let textoInputMes = parseInt(mesInput.value.trim());

        if (isNaN(textoInputMes) || textoInputMes < 1 || textoInputMes > 12) {
            alert("El campo mes es obligatorio y su valor debe estar entre 1 y 12.");
            return;
        }

        // ###################################################################################
        // ###################################################################################

        // VALIDACIÓN DEL AÑO
        let textoInputAño = parseInt(añoInput.value.trim());

        if (isNaN(textoInputAño) || textoInputAño < 1) {
            alert("El campo año es obligatorio y su valor mínimo es 1.");
            return;
        }

        // ###################################################################################
        // ###################################################################################

        // CREO EL DIV Y EL H1
        let divFechas = document.createElement("div");
        let tituloFechas = document.createElement("h1");

        tituloFechas.textContent = "Contenedor de fechas de cumpleaños";

        divFechas.appendChild(tituloFechas);

        // CREO LA IMG ALEATORIA Y LA INSERTO EN EL DIV
        let imgAleatoria = crearImgAleatoria();
        divFechas.appendChild(imgAleatoria);

        // INSERTO TODO EN EL (divPadre)
        divPadre.appendChild(divFechas);
    });
});
