// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if(window.scrollY > 50){
    navbar.classList.add('backdrop-blur-lg', 'bg-gray-900/80');
    navbar.classList.remove('bg-white/10');
  } else {
    navbar.classList.add('bg-white/10');
    navbar.classList.remove('bg-gray-900/80');
  }
});

// Mobile menu toggle
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobile-menu');

burger.addEventListener('click', () => {
  if(mobileMenu.classList.contains('translate-x-full')){
    mobileMenu.classList.remove('translate-x-full');
    mobileMenu.classList.add('translate-x-0');
  } else {
    mobileMenu.classList.add('translate-x-full');
    mobileMenu.classList.remove('translate-x-0');
  }
});

// Scroll reveal animations
ScrollReveal().reveal('section', {
  delay: 200,
  distance: '50px',
  origin: 'bottom',
  easing: 'ease-in-out',
  reset: true
});
