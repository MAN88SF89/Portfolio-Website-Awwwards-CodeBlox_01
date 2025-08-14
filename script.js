document.querySelectorAll(".reveal")
.forEach(function (elem) {
    let spanParent = document.createElement('span');
    let spanChild = document.createElement('span');

    spanParent.classList.add('parent');
    spanChild.classList.add('child');

    spanChild.textContent = elem.textContent;
    spanParent.appendChild(spanChild);

    elem.innerHTML = "";
    elem.appendChild(spanParent);
});

// Animate reveal elements on load
window.addEventListener('load', function() {
    setTimeout(() => {
        document.querySelectorAll('.reveal').forEach((elem, index) => {
            setTimeout(() => {
                elem.classList.add('animated');
            }, index * 200);
        });
    }, 500);
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Project card hover effects with GSAP
if (typeof gsap !== 'undefined') {
    gsap.registerPlugin();
    
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            gsap.to(this, {
                duration: 0.3,
                y: -10,
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
                ease: 'power2.out'
            });
        });
        
        card.addEventListener('mouseleave', function() {
            gsap.to(this, {
                duration: 0.3,
                y: 0,
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                ease: 'power2.out'
            });
        });
    });
}
