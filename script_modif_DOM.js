// modificatin num 1
/*
console.log("test");
function changeTitles(){
	let title = document.querySelectorAll("h1.jumbotron-heading");
	for(let i = 0; i < title.length; i++){
		console.log(title[i].textContent);
		if (title[i].textContent === "Album example"){
			console.log("yes");
			title[i].textContent = "";
			title[i].innerHTML = "Ce que j'ai appris à THP";
			console.log(title[i].textContent)
		};

	};

	let subTitle = document.getElementsByClassName("lead text-muted");
	for(let a = 0; a < subTitle.length; a++){
		if (subTitle[a].textContent === "Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely."){
			console.log("yes again");
			subTitle[a].textContent = "";
			subTitle[a].innerHTML = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !";
			console.log(subTitle[a].textContent);
		};
	
	};
};

changeTitles();



// modification num 2

function changeCallToActions(){
	let button = document.querySelectorAll("a.btn.btn-primary.my-2")
	for(let b = 0; b < button.length; b++){
		console.log(button[b].textContent);
		if (button[b].textContent === "Main call to action"){
			console.log("yes yes");
			button[b].textContent ="";
			button[b].innerHTML = "Ok je veux tester";
			button[b].href = "";
			button[b].href = "http://www.thehackingproject.org"
			console.log(button[b].href);
		};
	};

	let otherButton = document.querySelectorAll("a.btn.btn-secondary.my-2")
	for(let b = 0; b < otherButton.length; b++){
		console.log(otherButton[b].textContent);
		if (otherButton[b].textContent === "Secondary action"){
			console.log("yes secondary action");
			otherButton[b].textContent ="";
			otherButton[b].innerHTML = "Non Merci";
			otherButton[b].href = "";
			otherButton[b].href = "https://www.pole-emploi.fr/accueil/";
			console.log(otherButton[b].href);
		};
	};
};


changeCallToActions();

// Modification num 3

function changeLogoName(){
	let nav = document.querySelectorAll('a.navbar-brand strong');
	let text = nav[0];
		text.textContent = "";
		text.innerHTML = "The THP experience";
		text.style.fontSize = "2em";
		console.log(text.textContent);

}
changeLogoName();


// Modification num 4
function populateImages(){
	let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "http://jeudisdulibre.be/wp-content/uploads/2014/02/Ruby_on_Rails-logo.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];
	for(let i = 0; i < imagesArray.length; i++){
		let card = document.querySelectorAll("img.card-img-top");
		card[i].src = "";
		card[i].src = `${imagesArray[i]}`;
		console.log(card[i].src);		
	};
};
populateImages();
*/
// Modification num 5
function deleteLastCards(){

	let card = document.querySelectorAll("div.col-md-4");
	console.log(card);
	for(let k in card){
		long = card.length;
		if (k === long - 1 || k === long -2 || k === long - 3){
			card[k].parentNode.removeChild(card[k]);
		}

		}
	}
deleteLastCards();

// modification num 6

function changeCardsText(){
	let card = document.querySelectorAll("p.card-text");
	for(i = 0; i < card.length; i++ ){
		if(i === 0){
			card[i].textContent = "";
			card[i].innerHTML  = "L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web";
		}else if (i === 1){
			card[i].textContent = "";
			card[i].innerHTML  = "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML";
		}else if (i === 2){
			card[i].textContent = "";
			card[i].innerHTML  = "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype.";
		}
	};
};

changeCardsText();


// modification num 7
 function changeViewButton(){
 	let card = document.querySelectorAll("button.btn-outline-secondary")
 	for(let index in card){
 		if (card[index].textContent === "View"){
 			card[index].classList.remove("btn-outline-secondary")
 			card[index].classList.add("btn-outline-success")
 		};
 	};
 };

 changeViewButton();

 // modification num 8
 function addDivElement(){
 	let oldDiv = document.getElementsByClassName("row")[1]
 	let cardForJava = document.querySelectorAll("div.col-md-4")[2]
 	console.log(oldDiv);
 	let newDiv = document.createElement("div")
 	newDiv.classList.add("row")
 	oldDiv.parentNode.appendChild(newDiv);
 	newDiv.appendChild(cardForJava);
 	cardForJava.parentNode.remove(cardForJava);
 	console.log(newDiv)
 }
addDivElement();