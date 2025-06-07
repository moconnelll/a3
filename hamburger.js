document.addEventListener('DOMContentLoaded', () => {
    // getting the hamburger menu and buttons within home.html
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const hamburgerMenuButton = document.getElementById('hamburger-menu-button');
    const closeHamburgerMenuButton = document.getElementById('close-hamburger-menu-button');

    console.log(hamburgerMenu, hamburgerMenuButton, closeHamburgerMenuButton);

    // open hamburger menu on button click
    hamburgerMenuButton.addEventListener('click', function() {
        hamburgerMenu.classList.add('open');
        console.log('test')
    });

    // close hamburger menu on button click
    closeHamburgerMenuButton.addEventListener('click', function() {
        hamburgerMenu.classList.remove('open');
    });
});