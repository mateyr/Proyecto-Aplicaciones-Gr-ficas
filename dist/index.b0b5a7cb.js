// Seleccionar elementos
const navButton = document.querySelector(".nav__button");
const navMenu = document.querySelector(".nav__center");
const navLogo = document.querySelector(".nav__logo");
// Agregar evento de clic
navButton.addEventListener("click", toggleMenu);
// Función para alternar el menú
function toggleMenu() {
    navMenu.classList.toggle("nav__container--active");
    toggleImage(navMenu.classList.contains("nav__container--active"));
}
// Función para alternar la imagen de la marca y el botón de navegación
function toggleImage(isActive) {
    const logoStyle = isActive ? navLogo.style.filter = "brightness(0) invert(1)" : "unset";
    /*const logoSrc = isActive ? './img/logo-bookmark-white.svg' : './img/logo-bookmark.svg';*/ /*Este será para el carrito de compra*/ const buttonSrc = isActive ? "../img/icon-close.svg " : "../img/icon-hamburger.svg";
    navLogo.style.filter = logoStyle;
    /*navLogo.setAttribute('src', logoSrc);*/ navButton.setAttribute("src", buttonSrc);
}

//# sourceMappingURL=index.b0b5a7cb.js.map
