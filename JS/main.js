const toogleMenuElement = document.getElementById('toggle-menu');
const menuElement = document.getElementById('main-menu');
const toggleIcon = document.getElementById('toggle-menu--icon');

toogleMenuElement.addEventListener('click', () => {
    menuElement.classList.toggle('main-menu--show');
    toggleIcon.classList.toggle('toggle-menu--icon__activate');
});

document.getElementById('img2').scrollIntoView(true);