const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("span.material-symbols-outlined");
document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.getElementById('nav-links');

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



document.getElementById('contact-btn').addEventListener('click', function() {
    document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' });
});


document.addEventListener('DOMContentLoaded', function () {
        var videos = document.querySelectorAll('video');
        videos.forEach(function(video) {
            video.play().catch(function(error) {
                console.log('Video autoplay failed: ', error);
            });
        });
    });
