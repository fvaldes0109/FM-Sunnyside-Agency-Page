let menu;

function init() {
    let icon = document.querySelector('.options-icon-container');
    menu = document.querySelector('.menu');

    icon.addEventListener('click', toggleMenu);
}

function toggleMenu() {
    menu.style.visibility = menu.style.visibility === 'visible' ? 'hidden' : 'visible';
}

window.addEventListener('load', init);