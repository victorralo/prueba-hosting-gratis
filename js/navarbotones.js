const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', function() {
  navLinks.classList.toggle('active');
});

// Cerrar el menú desplegable cuando se hace clic en un enlace
navLinks.addEventListener
