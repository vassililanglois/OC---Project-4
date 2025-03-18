// Changement du header principal

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Changement du header de la modale

function editNav2() {
  var x = document.getElementById("myTopnav2");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Gestion de l'envoi du formulaire

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
});

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeButton = document.querySelector(".close");

// close the form

closeButton.addEventListener("click", () => {
  modalbg.style.display = "none";
  console.log("fermé");
});

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "flex";
}

// Récupérations des champs du formulaire

let prenom = document.getElementById("first");
console.log(prenom.value);

let nom = document.getElementById("last");
console.log(nom.value);

let email = document.getElementById("email");
console.log(email.value);

let birthdate = document.getElementById("birthdate");
console.log(birthdate.value);

let quantity = document.getElementById("quantity");
console.log(quantity.value);

//let location = document.querySelector("input[name=location]:checked");
//console.log(location.value);

let conditions = document.getElementById("conditions");
console.log(conditions.value);

let newsletter = document.getElementById("newsletter");
console.log(newsletter.value);

function validate() {
  console.log("C'est validé !");
}
