function cambiarATwitter() {
    
    //1)
    let nodoA = document.querySelector('a');

    //2)
    nodoA.id = 'aTwitter';

    //3)
    nodoA.href = 'https://www.twitter.com';

    //4)
    nodoA.textContent = 'Twitter';


    //5) 
    if (nodoA.hasAttribute("title")) {
        nodoA.setAttribute("title", "Ir a Twitter")
    } else {
        console.log("No se cambia el atributo 'title' por que no tiene.");
    }
}

cambiarATwitter();