// Theme switch
const themeBtn = document.getElementById('theme-btn');
if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });
}

// Scroll animation
const animatedElements = document.querySelectorAll('[data-animate]');

function handleScrollAnimation() {
  const triggerBottom = window.innerHeight * 0.85;
  animatedElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add('show');
    }
  });
}

window.addEventListener('scroll', handleScrollAnimation);
window.addEventListener('load', handleScrollAnimation);

// Parallax effect for hero images
const parallaxImages = document.querySelectorAll('.parallax img');

function handleParallax() {
  parallaxImages.forEach(img => {
    const offset = window.scrollY * -0.2;
    img.style.transform = `translateY(${offset}px)`;
  });
}

window.addEventListener('scroll', handleParallax);
