// 1
console.log(document.querySelector("#div1 a"));

// 2
console.log(document.querySelector("div > a"));

// 3
console.log(document.querySelector("#div1 > p > a"));

// 4
let elementoLinkNormal = document.querySelector(".linkNormal").nextElementSibling;

console.log(elementoLinkNormal.href);

// 5
let elemento = document.querySelector(".linkNormal[title^='Spider']");

console.log(elemento.innerHTML);

// 6