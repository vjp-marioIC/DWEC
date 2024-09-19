//PIDO EL NOMBRE AL USUARIO
let nombreUsuario = prompt("Introduzca el nombe: ");

//FUNCIÓN QUE GENERA EL MENSAJE CON EL NOMBRE DEL ALUMNO
function mensaje() {
    alert("Hola " + nombreUsuario);
}

let mensajeNombreAlumno = setTimeout(mensaje, 3000);