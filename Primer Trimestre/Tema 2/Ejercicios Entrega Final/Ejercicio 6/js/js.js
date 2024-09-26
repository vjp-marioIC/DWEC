let arrayEnteros = [4, 2, 16, 2];

//1) AÑADE DOS ELEMENTOS AL INICIO. 
arrayEnteros.unshift("Elemento1");
console.log(arrayEnteros.join("#"));

//2) AÑADE 3 MÁS AL FINAL.
arrayEnteros.push("Elemento2", "Elemento3", "Elemento4");
console.log(arrayEnteros.join("#"));

//3) ELIMINA LAS POSICIONES 3, 4, 5
arrayEnteros.splice(2, 3);
console.log(arrayEnteros.join("#"));

//4) INSERTA 2 ELEMENTOS ANTES DEL ÚLTIMO ELEMENTO.
arrayEnteros.splice(arrayEnteros.length - 1, 0, "Elemento5", "Elemento6");
console.log(arrayEnteros.join("#"));