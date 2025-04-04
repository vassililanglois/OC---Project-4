// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeIcon = document.querySelector(".close");
const closeButton = document.querySelector(".close_button");
const modalBody = document.querySelector(".modal-body");
const validateForm = document.querySelector(".validate_form");

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

// close modal with cross
closeIcon.addEventListener("click", () => {
  modalbg.style.display = "none";
});

// close modal with button
closeButton.addEventListener("click", () => {
  modalbg.style.display = "none";
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
let baliseBirthdate = document.getElementById("birthdate");
let baliseQuantity = document.getElementById("quantity");
let baliseLocation = document.getElementsByName("location");
let baliseConditions = document.getElementById("conditions");

function verifierName(balise) {
  let regexpName = new RegExp("^[^0-9]+$");
  if (balise.value.trim().length < 2 || !regexpName.test(balise.value.trim())) {
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
  let regexpEmail = new RegExp(
    "[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z0-9._-]+"
  );

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

function verifierBirthdate(balise) {
  let birthdate = new Date(baliseBirthdate.value);
  let currentDate = new Date();

  let age18Date = new Date(birthdate);
  age18Date.setFullYear(birthdate.getFullYear() + 18);

  if (currentDate >= age18Date) {
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

function verifierLocation(balise) {
  let isChecked = false;

  // Vérifie si au moins un bouton radio est coché
  for (let i = 0; i < balise.length; i++) {
    if (balise[i].checked) {
      isChecked = true;
      break;
    }
  }

  // Si un bouton est coché, on valide, sinon on affiche une erreur
  if (isChecked) {
    balise[0].closest(".formData").setAttribute("data-error-visible", "false");
    return true;
  } else {
    balise[0].closest(".formData").setAttribute("data-error-visible", "true");
    return false;
  }
}

function verifierQuantity(balise) {
  if (balise.value.trim() === "" || isNaN(balise.value) || balise.value < 0) {
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

function verifierConditions(balise) {
  if (balise.checked) {
    balise.closest(".formData").setAttribute("data-error-visible", "false");
    return true;
  } else {
    balise.closest(".formData").setAttribute("data-error-visible", "true");
    return false;
  }
}

// Événements individuels pour chaque champ
balisePrenom.addEventListener("change", () => verifierName(balisePrenom));
baliseNom.addEventListener("change", () => verifierName(baliseNom));
baliseEmail.addEventListener("change", () => verifierEmail(baliseEmail));
baliseBirthdate.addEventListener("change", () =>
  verifierBirthdate(baliseBirthdate)
);
baliseQuantity.addEventListener("change", () =>
  verifierBirthdate(baliseQuantity)
);
baliseConditions.addEventListener("change", () =>
  verifierConditions(baliseConditions)
);

// Attacher un événement à chaque bouton radio pour Location
for (let i = 0; i < baliseLocation.length; i++) {
  baliseLocation[i].addEventListener("change", () => {
    verifierLocation(baliseLocation);
  });
}

// Vérification avant l'envoi du formulaire
form.addEventListener("submit", (event) => {
  event.preventDefault;

  let prenomValide = verifierName(balisePrenom);
  let nomValide = verifierName(baliseNom);
  let emailValide = verifierEmail(baliseEmail);
  let birthdateValide = verifierBirthdate(baliseBirthdate);
  let quantityValide = verifierQuantity(baliseQuantity);
  let locationValide = verifierLocation(baliseLocation);
  let conditionsValide = verifierConditions(baliseConditions);

  if (
    !prenomValide ||
    !nomValide ||
    !emailValide ||
    !birthdateValide ||
    !quantityValide ||
    !locationValide ||
    !conditionsValide
  ) {
    event.preventDefault();
  } else {
    event.preventDefault();
    modalBody.style.display = "none";
    validateForm.style.display = "flex";

    console.log(`
      Prénom: ${balisePrenom.value}
      Nom: ${baliseNom.value}
      Email: ${baliseEmail.value}
      Date de naissance: ${baliseBirthdate.value}
      Nombre de tournois précédents: ${baliseQuantity.value}
      Ville choisie pour le prochain tournoi: ${Array.from(baliseLocation)
        .filter((radio) => radio.checked)
        .map((radio) => radio.value)}
      `);
  }
});
