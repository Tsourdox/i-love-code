window.onload = main;

function main() {
    addEventListeners();
    // Göra mer saker om det behövs i framtiden..
}

function addEventListeners() {
    const menuButton = document.getElementById('menu-button');
    menuButton.onclick = toggleMenu;
}

function toggleMenu() {
    const header = document.querySelector('header');

    if (header.style.height === '100%') {
        header.style.height = null;
    } else {
        header.style.height = '100%';
    }
}