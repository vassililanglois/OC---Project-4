// Utility function to set field validation state
function setValidationState(field, isValid) {
  if (isValid) {
    field.classList.remove("error");
    field.classList.add("good");
    field.closest(".formData").setAttribute("data-error-visible", "false");
  } else {
    field.classList.remove("good");
    field.classList.add("error");
    field.closest(".formData").setAttribute("data-error-visible", "true");
  }
  return isValid;
}

// Validation functions
export function validateName(field) {
  const nameRegex = /^[^0-9]+$/;
  const isValid =
    field.value.trim().length >= 2 && nameRegex.test(field.value.trim());
  return setValidationState(field, isValid);
}

export function validateEmail(field) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+$/;
  const isValid = emailRegex.test(field.value.trim());
  return setValidationState(field, isValid);
}

export function validateBirthdate(field) {
  const birthdate = new Date(field.value);
  const currentDate = new Date();
  const age18Date = new Date(birthdate);
  age18Date.setFullYear(birthdate.getFullYear() + 18);

  const isValid = currentDate >= age18Date;
  return setValidationState(field, isValid);
}

export function validateLocation(fields) {
  const isChecked = Array.from(fields).some((field) => field.checked);
  return setValidationState(fields[0], isChecked);
}

export function validateQuantity(field) {
  const isValid =
    field.value.trim() !== "" && !isNaN(field.value) && field.value >= 0;
  return setValidationState(field, isValid);
}

export function validateConditions(field) {
  const isValid = field.checked;
  return setValidationState(field, isValid);
}
