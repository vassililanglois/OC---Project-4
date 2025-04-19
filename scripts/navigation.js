const burgerMenu = document.querySelector(".menu_burger");
const topNav = document.getElementById("myTopnav");

const toggleNav = () => {
  topNav.classList.toggle("responsive");
};

burgerMenu.addEventListener("click", toggleNav);
