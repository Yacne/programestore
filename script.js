const toggleMenu = document.querySelector('.toggle-menu');
const sideMenu = document.querySelector('.side-menu');

toggleMenu.addEventListener('click', () => {
    sideMenu.classList.toggle('show');
});