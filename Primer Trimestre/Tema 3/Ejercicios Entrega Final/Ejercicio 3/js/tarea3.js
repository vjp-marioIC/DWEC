"use strict";

document.addEventListener("DOMContentLoaded", function () {

    let form = document.getElementById("newPlace");

    let nombreInput = document.getElementById("nombre");
    let descripcionInput = document.getElementById("descripcion");
    let cocinaInput = document.getElementById("cocina");
    let diasCheckboxes = document.querySelectorAll('input[name="dias"]');
    let diasError = document.getElementById("diasError");
    let telefonoInput = document.getElementById("telefono");
    let fotoInput = document.getElementById("foto");
    let imgPreview = document.getElementById("imgPreview");

    //FORMULARIO
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        //VALIDACIÓN NOMBRE
        //OBTENGO EL VALOR DEL INPUT Y ELIMINO LOS ESPACIOS CON TRIM()
        let textoInputNombre = nombreInput.value.trim();
        let ristraNombre = /^[A-Za-z][A-Za-z\s]*$/;

        if (!ristraNombre.test(textoInputNombre)) {
            nombreInput.classList.add("is-invalid");

            alert("El campo nombre es obligatorio y solo puede contener letras y espacios.");
            return;
        } else {
            nombreInput.classList.remove("is-invalid");
            nombreInput.classList.add("is-valid");
        }

        // ###################################################################################
        // ###################################################################################

        //VALIDACIÓN DESCRIPCIÓN (AL MENOS UN CARÁCTER QUE NO SEA ESPACIO)
        let descripcionValue = descripcionInput.value.trim();

        if (descripcionValue.length === 0) {
            alert("El campo descripción es obligatorio.");
            return;
        }

        // ###################################################################################
        // ###################################################################################

        //VALIDACIÓN COCINA (AL MENOS UN CARÁCTER QUE NO SEA ESPACIO)
        let cocinaValue = cocinaInput.value.trim();

        if (cocinaValue.length === 0) {
            alert("El campo cocina es obligatorio.");
            return;
        }

        // ###################################################################################
        // ###################################################################################

        //VALIDACIÓN DÍAS DE APERTURA (AL MENOS UNO DEBE ESTRA CHECKEADO).
        let atLeastOneChecked = Array.from(diasCheckboxes).some((checkbox) => checkbox.checked);

        if (!atLeastOneChecked) {
            diasError.classList.remove("d-none");
            return;
        } else {
            diasError.classList.add("d-none");
        }

        // ###################################################################################
        // ###################################################################################

        //VALIDACIÓN TELÉFONO (TIENEN QUE SER 9 NÚMEROS).
        let telefonoValue = telefonoInput.value.trim();
        let ristraTelefono = /^\d{9}$/;

        if (!ristraTelefono.test(telefonoValue)) {
            alert("Tienes que insertar un teléfono válido de 9 números.");
            return;
        }

        // ###################################################################################
        // ###################################################################################

        // VALIDACIÓN DE IMAGEN
        if (fotoInput.files.length === 0) {
            alert("El campo imagen es obligatorio.");
            return;
        }

        fotoInput.addEventListener('change', event => {
            let file = event.target.files[0];
            let reader = new FileReader();

            if (file) {
                reader.readAsDataURL(file);
            }

            reader.addEventListener('load', e => {
                imgPreview.src = reader.result;
            });
        });
    });
});