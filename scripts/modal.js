// DOM Elements
const modalBackground = document.querySelector(".bground");
const modalButtons = document.querySelectorAll(".modal-btn");
const closeIcon = document.querySelector(".close");
const closeButton = document.querySelector(".close_button");

// Launch modal form
const launchModal = () => {
  modalBackground.style.display = "flex";
  modalBackground.style.flexDirection = "column";
};

// Close modal form
const closeModal = () => {
  modalBackground.style.display = "none";
};

// Event listeners for modal
modalButtons.forEach((btn) => btn.addEventListener("click", launchModal));
[closeIcon, closeButton].forEach((el) =>
  el.addEventListener("click", closeModal)
);
