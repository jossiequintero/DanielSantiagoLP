const toogleMenuElement = document.getElementById("nav__toggle-menu");
const menuElement = document.getElementById("nav__menu");
const toggleIcon = document.getElementById("toggle-menu__icon");
const toggleMain = document.getElementById("main");
const home = document.getElementById("ho");
const about = document.getElementById("ab");
const projects = document.getElementById("pr");

toogleMenuElement.addEventListener("click", () => {
    menuElement.classList.toggle("nav__menu--show");
    toggleIcon.classList.toggle("toggle-menu__icon--activate");
    toggleMain.classList.toggle("main--deactivate");
});

function eventHandler(event) {
    menuElement.classList.remove("nav__menu--show");
    toggleIcon.classList.remove("toggle-menu__icon--activate");
    toggleMain.classList.remove("main--deactivate");
}

home.addEventListener("click", eventHandler);
about.addEventListener("click", eventHandler);
projects.addEventListener("click", eventHandler);

document.getElementById("img2").scrollIntoView(true);
