const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const navbar = document.querySelector('.navbar');

// Toggle mobile menu
menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      navMenu.classList.remove('active');
    }
  });
});

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});