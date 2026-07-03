window.addEventListener('scroll', () => {
  document.querySelector('nav').style.boxShadow =
    window.scrollY > 60 ? '0 2px 28px rgba(46,46,44,0.08)' : 'none';
});

const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
      e.target.style.transition = 'opacity 0.75s ease, transform 0.75s ease';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(
  '.trat-card, .value-card, .massaggio-item, .promo-card, .preview-card, .gallery-item, .ecommerce-card, .team-card'
).forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(18px)';
  obs.observe(el);
});
