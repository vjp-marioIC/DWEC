function agruparNumPares(...valores) {
    let numPares = [];
    let numImpares = [];

    for (let i = 0; i < valores.length; i++) {
        let num = valores[i];

        if ((typeof num === "number") && (num % 2 == 0)) {
            numPares.push(num);
        } else {
            numImpares.push(num);
        }
    }

    console.log("Los números pares son: " + numPares);
    console.log("Los números impares son:: " + numImpares);
    console.log("\n");
}

agruparNumPares(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
agruparNumPares(2, 4, 6, 8, 10);
agruparNumPares(1, 3, 5, 7, 9);