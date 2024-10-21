"use strict";

document.addEventListener("DOMContentLoaded", function () {

    let form = document.getElementById("newPlace");

    let nombreInput = document.getElementById("nombre");
    let descripcionTextarea = document.getElementById("descripcion");
    let cocinaInput = document.getElementById("cocina");
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
        let valorDescripcion = descripcionTextarea.value.trim();

        if (valorDescripcion.length === 0) {
            alert("El campo descripción es obligatorio.");
            return;
        } else {
            descripcionTextarea.classList.remove("is-invalid");
            descripcionTextarea.classList.add("is-valid");
        }

        // ###################################################################################
        // ###################################################################################

        //VALIDACIÓN COCINA (AL MENOS UN CARÁCTER QUE NO SEA ESPACIO)
        let valorCocina = cocinaInput.value.trim();

        if (valorCocina.length === 0) {
            alert("El campo cocina es obligatorio.");
            return;
        } else {
            cocinaInput.classList.remove("is-invalid");
            cocinaInput.classList.add("is-valid");
        }

        // ###################################################################################
        // ###################################################################################

        // VALIDACIÓN DÍAS DE APERTURA (AL MENOS UNO DEBE ESTAR CHECKEADO)
        let diasAperturaCheck = document.querySelector('input[name="dias"]:checked');

        if (!diasAperturaCheck) {
            diasError.classList.remove("d-none");

            alert("Debe seleccionar al menos un día de apertura.");
            return;
        } else {
            diasError.classList.add("d-none");
        }

        // ###################################################################################
        // ###################################################################################

        //VALIDACIÓN TELÉFONO (TIENEN QUE SER 9 NÚMEROS).
        let valorTelefono = telefonoInput.value.trim();
        let ristraTelefono = /^\d{9}$/;

        if (!ristraTelefono.test(valorTelefono)) {
            alert("Tienes que insertar un teléfono válido de 9 números.");
            return;
        } else {
            telefonoInput.classList.remove("is-invalid");
            telefonoInput.classList.add("is-valid");
        }

        // ###################################################################################
        // ###################################################################################

        // VALIDACIÓN DE IMAGEN
        // COMPRUEBO SI SE HA SELECCIOANDO ALGÚN ARCHIVO
        if (fotoInput.files.length === 0) {
            alert("El campo imagen es obligatorio.");
            return;
        }

        fotoInput.addEventListener('change', evento => {
            // SELECCIONO EL PRIMER ELEMENTO DE LA LISTA Y CREO UN OBJETO PARA LEER EL CONTENIDO DE LOS ARCHIVOS
            let file = evento.target.files[0];
            let reader = new FileReader();

            // SI EXISTE LO LEO
            if (file) {
                reader.readAsDataURL(file);
            }

            reader.addEventListener('load', evento => {
                imgPreview.src = reader.result;
            });
        });
    });
});