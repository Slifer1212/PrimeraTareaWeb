const sections = document.querySelectorAll('.section');

function revealOnScroll() {
  const triggerBottom = window.innerHeight / 5 * 4;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); 

const toggle = document.createElement('button');
toggle.textContent = '🌙';
toggle.setAttribute('aria-label', 'Alternar modo oscuro');
toggle.style.position = 'fixed';
toggle.style.top = '10px';
toggle.style.right = '10px';
toggle.style.padding = '8px 12px';
toggle.style.border = 'none';
toggle.style.borderRadius = '6px';
toggle.style.background = '#2980b9';
toggle.style.color = 'white';
toggle.style.cursor = 'pointer';
toggle.style.zIndex = '10000';

document.body.appendChild(toggle);

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});
