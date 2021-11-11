window.onload = main;

function main() {
    addEventListeners();
    // Göra mer saker om det behövs i framtiden..
}

function addEventListeners() {
    const menuButton = document.getElementById('menu-button');
    menuButton.onclick = toggleMenu;

    const textSizeButton = document.getElementById('size-button');
    textSizeButton.onclick = toggleTextSize;
}

function toggleMenu() {
    const header = document.querySelector('header');

    if (header.style.height === '100%') {
        header.style.height = null;
    } else {
        header.style.height = '100%';
    }
}

function toggleTextSize() {
    const html = document.querySelector('html');
    const cornerIcon = document.querySelector('#size-button .corner');
    
    if (html.style.fontSize === '1.2rem') {
        html.style.fontSize = null;
        cornerIcon.innerHTML = 'zoom_in';
    } else {
        html.style.fontSize = '1.2rem';
        cornerIcon.innerHTML = 'zoom_out';
    }
}