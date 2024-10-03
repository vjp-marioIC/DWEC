// 1
console.log("1)");
console.log(document.querySelector("#div1 a").title);
console.log("#######################################)");

// 2
console.log("2)");
console.log(document.querySelector("div > a"));
console.log("#######################################)");

// 3
console.log("3)");
console.log(document.querySelector("#div1 > p > a"));
console.log("#######################################)");

// 4
let elementoLinkNormalSegundo = document.querySelector(".linkNormal").nextElementSibling;

console.log("4)");
console.log(elementoLinkNormalSegundo.href);
console.log("#######################################)");

// 5
let elementoLinkNormalSpider = document.querySelector(".linkNormal[title^='Spider']");

console.log("5)");
console.log("Tipo de nodo: (" + elementoLinkNormalSpider.nodeType + ")");
console.log("Contenido HTML: " + elementoLinkNormalSpider.innerHTML);
console.log("#######################################)");

// 6
let siguienteHermanoSpider = elementoLinkNormalSpider.nextElementSibling;

console.log("6)");
console.log(siguienteHermanoSpider);
console.log("#######################################)");

// 7
let todosTitlesLinkNormal = document.querySelectorAll('.linkNormal');

console.log("7)");
todosTitlesLinkNormal.forEach(element => {
    console.log(element.getAttribute('title'));
});
console.log("#######################################)");

// 8
let todosAHermanosTituloSpirdeman = document.querySelector('.linkNormal[title="Spiderman"]');
let anteriorHermano = todosAHermanosTituloSpirdeman.previousElementSibling;
let posteriorHermano = todosAHermanosTituloSpirdeman.nextElementSibling;

console.log("8)");

console.log('+ HERMANOS ANTERIORES:');
while (anteriorHermano) {
    if (anteriorHermano.tagName === 'A') {
        console.log(anteriorHermano.href);
    }
    anteriorHermano = anteriorHermano.previousElementSibling;
}

console.log('+ HERMANOS POSTERIORES:');
while (posteriorHermano) {
    if (posteriorHermano.tagName === 'A') {
        console.log(posteriorHermano.href);
    }
    posteriorHermano = posteriorHermano.nextElementSibling;
}