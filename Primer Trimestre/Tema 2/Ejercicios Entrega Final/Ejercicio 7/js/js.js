let arrayEnterosPares = [2, 4, 6, 8, 10];
let arrayEnterosParesImpaares = [2, 3, 5, 9, 10];

//SI EL NÚMERO MODULO DE 2 ES 0 EL NÚMERO ES PAR, SI NO ES IMPAR
let numPares = arrayEnterosPares.every(numero => numero % 2 === 0);
let numParesImpares = arrayEnterosParesImpaares.every(numero => numero % 2 === 0);

if (numPares) {
  console.log("Todos los números son pares.");
} else {
  console.log("No todos los números son pares.");
}

if (numParesImpares) {
    console.log("Todos los números son pares.");
  } else {
    console.log("No todos los números son pares.");
  }