/* ==========================================
   Espaço Aline Marth — JavaScript
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ---- INTRO (VINHETA) ----
    const intro = document.getElementById('intro-screen');
    setTimeout(() => {
        intro.classList.add('hidden');
        setTimeout(() => { intro.style.display = 'none'; }, 800);
    }, 2800);

    // ---- AOS INIT ----
    AOS.init({
        once: true,
        duration: 800,
        easing: 'ease-out-cubic',
        offset: 80
    });

    // ---- THEME TOGGLE ----
    const themeBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const saved = localStorage.getItem('alinemarth-theme');

    if (saved === 'dark') {
        body.classList.replace('light-theme', 'dark-theme');
    }

    themeBtn.addEventListener('click', () => {
        if (body.classList.contains('light-theme')) {
            body.classList.replace('light-theme', 'dark-theme');
            localStorage.setItem('alinemarth-theme', 'dark');
        } else {
            body.classList.replace('dark-theme', 'light-theme');
            localStorage.setItem('alinemarth-theme', 'light');
        }
    });

    // ---- NAVBAR SCROLL  ----
    const header = document.getElementById('header');
    const heroSection = document.querySelector('.hero');

    function handleScroll() {
        const scrollY = window.scrollY;
        // Scrolled state
        if (scrollY > 80) {
            header.classList.add('scrolled');
            header.classList.remove('hero-nav');
        } else {
            header.classList.remove('scrolled');
            header.classList.add('hero-nav');
        }
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    // ---- MOBILE MENU ----
    const mobileBtn = document.getElementById('mobile-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
        const icon = mobileBtn.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // Close mobile menu on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            const icon = mobileBtn.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        });
    });

    // ---- HERO PARTICLES ----
    const particlesContainer = document.getElementById('particles');
    if (particlesContainer) {
        for (let i = 0; i < 30; i++) {
            const p = document.createElement('div');
            p.classList.add('particle');
            p.style.left = Math.random() * 100 + '%';
            p.style.animationDelay = Math.random() * 15 + 's';
            p.style.animationDuration = (10 + Math.random() * 20) + 's';
            p.style.width = (2 + Math.random() * 3) + 'px';
            p.style.height = p.style.width;
            p.style.opacity = (0.2 + Math.random() * 0.4);
            particlesContainer.appendChild(p);
        }
    }
});
