// Toggle Navigation Menu on Hamburger Click
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Smooth Scrolling (Already handled by CSS 'scroll-behavior: smooth;')
// Additional Smooth Scrolling for older browsers
const links = document.querySelectorAll('a[href^="#"]');

for (const link of links) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target){
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Close the menu if it's open (for mobile)
            if(navMenu.classList.contains('active')){
                navMenu.classList.remove('active');
            }
        }
    });
}

// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true
});

// Toggle Dark Mode
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    themeToggle.classList.toggle('active');
    if(body.classList.contains('dark-mode')){
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
});


