const toogleMenuElement = document.getElementById('nav__toggle-menu');
const menuElement = document.getElementById('nav__menu');
const toggleIcon = document.getElementById('toggle-menu__icon');
const toggleMain = document.getElementById('main')

toogleMenuElement.addEventListener('click', () => {
    menuElement.classList.toggle('nav__menu--show');
    toggleIcon.classList.toggle('toggle-menu__icon--activate');
    toggleMain.classList.toggle('main--deactivate');
});

document.getElementById('img2').scrollIntoView(true);