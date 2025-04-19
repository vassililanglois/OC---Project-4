import {
  validateName,
  validateEmail,
  validateBirthdate,
  validateLocation,
  validateQuantity,
  validateConditions,
} from "./formValidation.js";

function getFormFields() {
  return {
    form: document.getElementById("myForm"),
    firstNameField: document.getElementById("first"),
    lastNameField: document.getElementById("last"),
    emailField: document.getElementById("email"),
    birthdateField: document.getElementById("birthdate"),
    quantityField: document.getElementById("quantity"),
    locationFields: document.getElementsByName("location"),
    conditionsField: document.getElementById("conditions"),
    modalBody: document.querySelector(".modal-body"),
    validateForm: document.querySelector(".validate-form"),
  };
}

function attachChangeListener(field, validationFunction) {
  field.addEventListener("change", () => validationFunction(field));
}

function attachListeners(fields) {
  attachChangeListener(fields.firstNameField, validateName);
  attachChangeListener(fields.lastNameField, validateName);
  attachChangeListener(fields.emailField, validateEmail);
  attachChangeListener(fields.birthdateField, validateBirthdate);
  attachChangeListener(fields.quantityField, validateQuantity);
  fields.locationFields.forEach((field) =>
    attachChangeListener(field, () => validateLocation(fields.locationFields))
  );
  attachChangeListener(fields.conditionsField, validateConditions);
}

function validateAllFields(fields) {
  return (
    validateName(fields.firstNameField) &&
    validateName(fields.lastNameField) &&
    validateEmail(fields.emailField) &&
    validateBirthdate(fields.birthdateField) &&
    validateQuantity(fields.quantityField) &&
    validateLocation(fields.locationFields) &&
    validateConditions(fields.conditionsField)
  );
}

function logFormData(fields) {
  const selectedLocation = document.querySelector(
    "input[name=location]:checked"
  ).value;

  const formData = `
    Prénom: ${fields.firstNameField.value}
    Nom: ${fields.lastNameField.value}
    Email: ${fields.emailField.value}
    Date de naissance: ${fields.birthdateField.value}
    Nombre de participations: ${fields.quantityField.value}
    Ville sélectionnée: ${selectedLocation}
  `;

  console.log(formData);
}

const fields = getFormFields();
attachListeners(fields);

fields.form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (validateAllFields(fields)) {
    fields.modalBody.style.display = "none";
    fields.validateForm.style.display = "flex";
    logFormData(fields);
  }
});
