function longitudTotalDeArgumentos(...valores) {
    let sonString = valores.every(valor => typeof valor === "string");
    
    if (!sonString) {
        console.log("Error, todos los argumentos tienen que ser cadenas.");
        return "Error, todos los argumentos tienen que ser cadenas.";
    }
    
    // Sumar las longitudes de las cadenas
    let longitudTotal = valores.reduce((total, valor) => total + valor.length, 0);
    console.log("La suma total de las longitudes de las cadenas es: " + longitudTotal);
}

longitudTotalDeArgumentos("hola", "casa", "perro");
longitudTotalDeArgumentos("Ana", 4);