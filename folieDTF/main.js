const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("span.material-symbols-outlined");
document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.nav__menu__btn');
    const navLinks = document.querySelector('.nav__links');

    menuBtn.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.info-btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const infoText = button.previousElementSibling;

            if (infoText.classList.contains('expanded')) {
                infoText.classList.remove('expanded');
                button.textContent = 'Afiseaza mai mult';
            } else {
                infoText.classList.add('expanded');
                button.textContent = 'Ascunde';
            }
        });
    });
});
