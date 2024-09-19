// PIDO AL USUARIO QUE INTRODUZCA 3 NÚMEROS
let num1 = parseInt(prompt("Introduzca el primer número:"));
let num2 = parseInt(prompt("Introduzca el segundo número:"));
let num3 = parseInt(prompt("Introduzca el tercer número:"));

//CALCULO LA SUMA DE LOS NÚMEROS
let suma = num1 + num2 + num3;

//VERIFICO SI LA SUMA ES IGUAL A 100
if (suma == 100) {
  alert("Éxito");
} else {
  alert("Fracaso");
}