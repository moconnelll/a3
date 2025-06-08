document.addEventListener('DOMContentLoaded', () => {
    // getting the hamburger menu and buttons within home.html
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const hamburgerMenuButton = document.getElementById('hamburger-menu-button');
    const closeHamburgerMenuButton = document.getElementById('close-hamburger-menu-button');
    const mainContent = document.querySelector('.main-content');

    console.log(hamburgerMenu, hamburgerMenuButton, closeHamburgerMenuButton, mainContent);

    // open hamburger menu on button click
    hamburgerMenuButton.addEventListener('click', function() {
        hamburgerMenu.classList.add('open');
        hamburgerMenuButton.style.display = 'none'; // hides hamburger button when menu is open
        closeHamburgerMenuButton.style.display = 'block'; // shows close button when menu is open
        console.log('test')
    });

    // close hamburger menu on button click
    closeHamburgerMenuButton.addEventListener('click', function() {
        hamburgerMenu.classList.remove('open');
        closeHamburgerMenuButton.style.display = 'none'; // hides close button when menu is closed
        hamburgerMenuButton.style.display = 'block'; // shows hamburger button when menu is closed
    });
});