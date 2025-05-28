const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

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

const fadeElements = document.querySelectorAll('.fade-in');

const fadeInOnScroll = () => {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', fadeInOnScroll);
fadeInOnScroll(); 

const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

const lightTheme = {
    '--bg-dark': '#ffffff',
    '--bg-light': '#f8f9fa',
    '--text-primary': '#1a1a1a',
    '--text-secondary': '#6c757d',
    '--card-bg': 'rgba(0, 0, 0, 0.05)',
    '--border': 'rgba(0, 0, 0, 0.1)'
};

const darkTheme = {
    '--bg-dark': '#0f0f0f',
    '--bg-light': '#1a1a1a',
    '--text-primary': '#ffffff',
    '--text-secondary': '#a0a0a0',
    '--card-bg': 'rgba(255, 255, 255, 0.05)',
    '--border': 'rgba(255, 255, 255, 0.1)'
};

let isDark = localStorage.getItem('darkMode') !== 'false';

if (!isDark) {
    applyTheme(lightTheme);
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

function applyTheme(theme) {
    Object.keys(theme).forEach(key => {
        document.documentElement.style.setProperty(key, theme[key]);
    });
}

themeToggle.addEventListener('click', () => {
    isDark = !isDark;
    const theme = isDark ? darkTheme : lightTheme;
    const icon = isDark ? 'fa-moon' : 'fa-sun';
    
    applyTheme(theme);
    themeToggle.innerHTML = `<i class="fas ${icon}"></i>`;
    
    localStorage.setItem('darkMode', isDark);
});

const subtitleElement = document.querySelector('.hero-subtitle');
const subtitles = [
    'Desarrollador de Software',
    'Entusiasta Tecnológico',
    'Amante de los Carros',
    'Chef Aficionado'
];
let subtitleIndex = 0;

function typeSubtitle() {
    subtitleIndex = (subtitleIndex + 1) % subtitles.length;
    subtitleElement.style.opacity = '0';
    
    setTimeout(() => {
        subtitleElement.textContent = subtitles[subtitleIndex];
        subtitleElement.style.opacity = '1';
    }, 500);
}

setTimeout(() => {
    typeSubtitle();
    setInterval(typeSubtitle, 3000);
}, 3000);

const hero = document.querySelector('.hero');
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = -scrolled * 0.5;
    hero.style.transform = `translateY(${parallax}px)`;
});

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.classList.add('loaded');
        });
        
        if (img.complete) {
            img.classList.add('loaded');
        }
    });
});

const currentYear = new Date().getFullYear();
const footerYear = document.querySelector('footer p');
if (footerYear) {
    footerYear.innerHTML = footerYear.innerHTML.replace('2025', currentYear);
}

console.log('%c¡Hola! 👋', 'font-size: 24px; font-weight: bold; color: #667eea;');
console.log('%c¿Buscando algo interesante? 🕵️‍♂️', 'font-size: 16px; color: #48bb78;');
console.log('%cSi te gusta lo que ves, ¡contáctame!', 'font-size: 16px; color: #f56565;');
console.log('%c📧 supremeyunior008@gmail.com', 'font-size: 14px; color: #a0a0a0;');