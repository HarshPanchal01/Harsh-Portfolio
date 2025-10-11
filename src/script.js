const navToggle = document.querySelector('.nav__toggle');
const navLinks = document.querySelector('.nav__links');
const scrollTopButton = document.querySelector('.scroll-top');

if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
        navToggle.setAttribute('aria-expanded', !expanded);
        navLinks.classList.toggle('nav__links--open');
        navToggle.classList.toggle('nav__toggle--open');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('nav__links--open');
            navToggle.setAttribute('aria-expanded', 'false');
            navToggle.classList.remove('nav__toggle--open');
        });
    });
}

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (!prefersReducedMotion.matches) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal--visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
}

if (scrollTopButton) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            scrollTopButton.classList.add('scroll-top--visible');
        } else {
            scrollTopButton.classList.remove('scroll-top--visible');
        }
    });

    scrollTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: prefersReducedMotion.matches ? 'auto' : 'smooth' });
    });
}

const yearEl = document.getElementById('year');
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}
