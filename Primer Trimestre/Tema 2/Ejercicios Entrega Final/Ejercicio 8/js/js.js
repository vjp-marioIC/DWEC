function procesarArray(arra) {
    for (let i = 0; i < arra.length; i++) {
        if (typeof arra[i] !== 'number') {
            alert("Error");

            return;
        }
    }

    for (let i = 0; i < arra.length; i++) {
        arra[i] = arra[i] * 2;
    }

    for (let i = 0; i < arra.length; i++) {
        if (arra[i] % 2 !== 0) {
            alert("Error");

            return;
        }
    }
    
    alert("Éxito");
}

//PRUEBA
let arra = [2, 4, 6, 8, 10];

procesarArray(arra);