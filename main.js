// Haremos que el menu de la clase 7 aparezca y desaparezca
// Usando inactive haremos que se aparezca y desaparezca al hacer clic en el correo
//Primero lalmamos a la clase de la etiqueta html que tiene el correo (es un li)
const menuEmail = document.querySelector('.navbar-email');
// Segundo llamamos al elmento html que tiene al desktop menu, el de la clase 7
const desktopMenu = document.querySelector('.desktop-menu');

// Haremos que aparezca y desparezca el menu de la clase 8
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

//Llamamos a los addlistener
menuEmail.addEventListener('click', toogleDesktopMenu);
burgerMenu.addEventListener('click', toogleMobileMenu);

function toogleDesktopMenu() {
    // Classlist Toogl activa o desactiva el menu para que se vea, cuando hagamos clic en el correo
    desktopMenu.classList.toggle('inactive');
}

function toogleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
}