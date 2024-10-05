// Toggle Navigation Menu on Hamburger Click
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Smooth Scrolling (Handled by CSS 'scroll-behavior: smooth;')
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

// Animate Skill Bars on Scroll
window.addEventListener('scroll', () => {
    const skills = document.querySelectorAll('.skill-percentage');
    const windowHeight = window.innerHeight;
    const triggerPoint = 150;

    skills.forEach(skill => {
        const skillTop = skill.getBoundingClientRect().top;

        if(skillTop < windowHeight - triggerPoint){
            if(!skill.classList.contains('active')){
                skill.classList.add('active');
                // Animate the width
                const width = skill.style.width;
                skill.style.width = '0';
                setTimeout(() => {
                    skill.style.width = width;
                }, 100);
            }
        }
    });
});



