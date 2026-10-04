const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.16 });

revealItems.forEach((item) => observer.observe(item));

const siren = document.querySelector('.siren-bg');
let flashState = false;
setInterval(() => {
  flashState = !flashState;
  siren.classList.toggle('red', flashState);
  siren.classList.toggle('blue', !flashState);
}, 500);

const scrollButtons = document.querySelectorAll('[data-scroll]');
scrollButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const target = document.querySelector(button.dataset.scroll);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
