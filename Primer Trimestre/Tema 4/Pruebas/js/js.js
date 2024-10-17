// PRUEBA 1
var obj = new Object();
obj.nombre = "Pedro";
obj["edad"] = 41;
obj.getInfo = function () {
    return "Mi nombre es " + this.nombre +  " y tengo " + this.edad + " años."
}

console.log(obj.getInfo());
console.log(obj.nombre);
console.log(obj["nombre"]);

var prop = "nombre";
console.log(obj[prop]);

// PRUEBA 1.2
var obj2 = {
    nombre: "Paco",
    edad: 32,

    getInfo() {
        return "Mi nombre es " + this.nombre +  " y tengo " + this.edad + " años."
    }
};

console.log(obj2.getInfo());
console.log(obj2.nombre);
console.log(obj2["nombre"]);

var prop2 = "nombre";
console.log(obj2[prop2]);