// FUNCIÓN QUE RECIBE UN ARRAY
function ordenarArray(arra) {
    let n = arra.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {

            //MÉTODO DE LA BURBUJA
            if (arra[j] > arra[j + 1]) {
                let aux = arra[j];
                arra[j] = arra[j + 1];
                arra[j + 1] = aux;
            }
        }
    }
}

let arrayEnteros = [10, 5, 40, 23, 19];

console.log("Array original: " + arrayEnteros)

ordenarArray(arrayEnteros);
console.log("Array de enteros ordenado de menor a mayor: " + arrayEnteros);