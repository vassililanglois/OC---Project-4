// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeButton = document.querySelector(".close");

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

// close modal
closeButton.addEventListener("click", () => {
  modalbg.style.display = "none";
  console.log("fermé");
});

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "flex";
  modalbg.style.flexDirection = "column";
}

// Gestion de l'envoi du formulaire
let form = document.querySelector("form");
let balisePrenom = document.getElementById("first");
let baliseNom = document.getElementById("last");
let baliseEmail = document.getElementById("email");

function verifierName(balise) {
  if (balise.value.trim().length < 2) {
    balise.classList.remove("good");
    balise.classList.add("error");
    balise.closest(".formData").setAttribute("data-error-visible", "true");
    return false;
  } else {
    balise.classList.remove("error");
    balise.classList.add("good");
    balise.closest(".formData").setAttribute("data-error-visible", "false");
    return true;
  }
}

function verifierEmail(balise) {
  let regexpEmail = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+.[a-z0-9._-]+");

  if (regexpEmail.test(balise.value.trim())) {
    balise.classList.remove("error");
    balise.classList.add("good");
    balise.closest(".formData").setAttribute("data-error-visible", "false");
    return true;
  } else {
    balise.classList.remove("good");
    balise.classList.add("error");
    balise.closest(".formData").setAttribute("data-error-visible", "true");
    return false;
  }
}

// Événements individuels pour chaque champ
balisePrenom.addEventListener("change", () => verifierName(balisePrenom));
baliseNom.addEventListener("change", () => verifierName(baliseNom));
baliseEmail.addEventListener("change", () => verifierEmail(baliseEmail));

// Vérification avant l'envoi du formulaire
form.addEventListener("submit", (event) => {
  let prenomValide = verifierName(balisePrenom);
  let nomValide = verifierName(baliseNom);
  let emailValide = verifierEmail(baliseEmail);

  if (!prenomValide || !nomValide || !emailValide) {
    event.preventDefault();
  }
});
