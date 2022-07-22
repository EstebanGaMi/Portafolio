
const iconoMenu = document.querySelector('.bars__menu'),
  menu = document.querySelector('#menu');

iconoMenu.addEventListener('click', (e) => {

  // Alternamos estilos para el menu y body
  menu.classList.toggle('active');
  document.body.classList.toggle('opacity');

  // Alternamos su atributo 'src' para el ícono del menú
  const rutaActual = e.target.getAttribute('src');

  if (rutaActual == 'img/open-menu.png') {
    e.target.setAttribute('src', 'img/open-menu2.png');
  } else {
    e.target.setAttribute('src', 'img/open-menu.png');
  }
});


document.querySelector(".bars__menu").addEventListener("click", animateBars);

var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");

function animateBars() {
  line1__bars.classList.toggle("activeline1__bars-menu");
  line2__bars.classList.toggle("activeline2__bars-menu");
  line3__bars.classList.toggle("activeline3__bars-menu");
} 
