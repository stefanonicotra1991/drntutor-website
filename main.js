// Scroll reveal
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
document.querySelectorAll('.hero .reveal').forEach(el =>
  setTimeout(() => el.classList.add('visible'), 100)
);

// Hide scroll hint after first scroll
window.addEventListener('scroll', () => {
  const hint = document.querySelector('.scroll-hint');
  if (hint) hint.style.opacity = '0';
}, { once: true });
