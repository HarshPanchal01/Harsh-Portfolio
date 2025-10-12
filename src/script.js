const yearEl = document.getElementById('year');
const scrollTopButton = document.querySelector('.scroll-top');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

if (scrollTopButton) {
    const toggleScrollTop = () => {
        if (window.scrollY > 320) {
            scrollTopButton.classList.add('scroll-top--visible');
        } else {
            scrollTopButton.classList.remove('scroll-top--visible');
        }
    };

    window.addEventListener('scroll', toggleScrollTop, { passive: true });
    toggleScrollTop();

    scrollTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: prefersReducedMotion.matches ? 'auto' : 'smooth' });
    });
}
