const hamburger = document.querySelector('.menuToggle');
const navMenu = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', menuToggleClick);
navLinks.forEach(navLink => navLink.addEventListener('click', menuToggleClick));

function menuToggleClick() {
  hamburger.classList.toggle("menu-open");
  navMenu.classList.toggle("menu-open");
}

