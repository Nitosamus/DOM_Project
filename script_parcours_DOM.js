
// combien y-t-il d'element <p> présentes dans la page HTML
let countPara = document.querySelectorAll("p").length;
console.log(countPara);

// Quel est le contenu texte de l'élément portant l'id coucou ? 
let coucou = document.getElementById("coucou").textContent;
console.log(coucou);

// Quelle est l'URL vers laquelle pointe le 3ème élément <a> de la page HTML ? 
let link = document.getElementsByTagName("a")[2].href;
console.log(link);

// Combien d'éléments portent la classe compte-moi ?
let coumptMoi = document.querySelectorAll(".compte-moi").length;
console.log(coumptMoi);

//Combien d'éléments <li> portent la classe compte-moi ?
let liComptemoi = document.querySelectorAll("li.compte-moi").length;
console.log(liComptemoi);

// Combien d'éléments <li> et situés dans une liste ordonnée portent la classe compte-moi ? 
let olComptemoi = document.querySelectorAll("ol > li.compte-moi").length;
console.log(olComptemoi);

// jeu de piste

let content = document.querySelectorAll("div > ul");
let ulInDiv = content.childNodes;
console.log(content);

// Modification DOM RAVALEMENT DE FACADE COMPLET

