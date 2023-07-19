// Haremos que el menu de la clase 7 aparezca y desaparezca
// Usando inactive haremos que se aparezca y desaparezca al hacer clic en el correo
//Primero lalmamos a la clase de la etiqueta html que tiene el correo (es un li)
const menuEmail = document.querySelector('.navbar-email');
// Segundo llamamos al elmento html que tiene al desktop menu, el de la clase 7
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toogleDesktopMenu);

function toogleDesktopMenu() {
    // Classlist Toogl activa o desactiva el menu para que se vea, cuando hagamos clic en el correo
    desktopMenu.classList.toggle('inactive');


}