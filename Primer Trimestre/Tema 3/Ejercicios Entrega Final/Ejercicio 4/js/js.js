document.addEventListener("DOMContentLoaded", function () {

    // VARIABLES
    let form = document.getElementById("formulario");

    let nombreInput = document.getElementById("nombre");
    let diaInput = document.getElementById("dia");
    let mesInput = document.getElementById("mes");
    let añoInput = document.getElementById("año");

    // FORMULARIO
    form.addEventListener("submit", function (event) {
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
    });
});
