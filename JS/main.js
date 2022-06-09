const toogleMenuElement = document.getElementById('nav__toggle-menu');
const menuElement = document.getElementById('nav__menu');
const toggleIcon = document.getElementById('toggle-menu__icon');

toogleMenuElement.addEventListener('click', () => {
    menuElement.classList.toggle('nav__menu--show');
    toggleIcon.classList.toggle('toggle-menu__icon--activate');
});

document.getElementById('img2').scrollIntoView(true);

