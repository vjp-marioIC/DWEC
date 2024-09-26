// FUNCIÓN QUE RECIBE TRRES PARAMETROS CON VALOR POR DEFECTO
function conversiones(producto = "Producto generico", precio = 100, impuestos = 21) {
     
    //COMBIERTO LAS ENTRADAS A CADENA, ENTERO Y ENTERO
    let productoString = String(producto);
    let precioInt = Number(precio);
    let impuestosInt = Number(impuestos);
 
    // VERIFICO SI LAS CADENAS FUERON CONVERTIDAS EXITOSAMENTE
    if (typeof productoString !== 'string' || typeof precioInt !== 'number' || typeof impuestosInt !== 'number') {
        console.log("El producto es " + producto + " el precio es " + precio + " y su impuesto es " + impuestos);
    } else {
        console.log("El producto es " + productoString + " el precio es " + precioInt + " y su impuesto es " + impuestosInt);
    }
}

//PRUEBAS
conversiones("asd");
conversiones("asd", true);
conversiones("asd", true, false);
conversiones("asd", true, 23);
conversiones(null, true, 23);