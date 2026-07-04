document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());

const leadForm = document.getElementById('leadForm');
if (leadForm) {
  leadForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thanks! This form is not yet connected to a backend — hook it up to Formspree, Google Forms, or your own API to start receiving these leads.');
    leadForm.reset();
  });
}

const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    const isOpen = navLinks.style.display === 'flex';
    navLinks.style.display = isOpen ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '64px';
    navLinks.style.right = '28px';
    navLinks.style.background = '#FAF6EE';
    navLinks.style.border = '1px solid #E3D8C3';
    navLinks.style.padding = '16px 20px';
    navLinks.style.gap = '14px';
  });
}
