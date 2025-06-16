

function handleMouseMove(e) {
  const x = `${e.clientX}px`;
  const y = `${e.clientY}px`;
  document.body.style.setProperty('--x', x);
  document.body.style.setProperty('--y', y);
}


function observeElements(selector, className, delay = 0) {
  const elements = document.querySelectorAll(selector);

  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        if (delay > 0) {
          setTimeout(() => {
            entry.target.classList.add(className);
          }, index * delay);
        } else {
          entry.target.classList.add(className);
        }
      } else {
        entry.target.classList.remove(className);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
}

// === DOM Ready ===
document.addEventListener('DOMContentLoaded', () => {

  document.addEventListener('mousemove', handleMouseMove);

 
  observeElements('section', 'show');
  observeElements('.skill-card', 'slide-in', 450);


  const menuBtn = document.getElementById('menu-btn');
  const menu = document.getElementById('menu');

  if (menuBtn && menu) {
    menuBtn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  }
});
