
function handleMouseMove(e) {
  const x = `${e.clientX}px`;
  const y = `${e.clientY}px`;
  document.body.style.setProperty('--x', x);
  document.body.style.setProperty('--y', y);
}

// === Observa elementos al entrar al viewport para aplicar clases de animación ===
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

// === Evento principal cuando el DOM esté completamente cargado ===
document.addEventListener("DOMContentLoaded", () => {
  // Inyectar la sección de habilidades dinámicamente
  const habilidadesHTML = `
    <section id="habilidades"
      class="opacity-0 transition-all duration-700 ease-in-out slide-in-right text-center py-12">
      <h2
        class="text-4xl font-bold text-yellow-400 mb-12 hover:text-yellow-200 hover:scale-105 hover:brightness-125 hover:shadow-lg active:text-white transition ease-in-out duration-300">
        MIS HABILIDADES
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center items-center max-w-4xl mx-auto">
        <div class="bg-gray-800 p-6 rounded-lg skill-card opacity-0 transform translate-y-6 transition duration-700"
             style="animation: pulse-html 2s infinite;">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" class="h-12 mx-auto mb-4">
          <p class="text-lg">HTML</p>
        </div>

        <div class="bg-gray-800 p-6 rounded-lg skill-card opacity-0 transform translate-y-6 transition duration-700"
             style="animation: pulse-css 2s infinite;">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" class="h-12 mx-auto mb-4">
          <p class="text-lg">CSS</p>
        </div>

        <div class="bg-gray-800 p-6 rounded-lg skill-card opacity-0 transform translate-y-6 transition duration-700"
             style="animation: pulse-js 2s infinite;">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" class="h-12 mx-auto mb-4">
          <p class="text-lg">JavaScript</p>
        </div>

        <div class="bg-gray-800 p-6 rounded-lg skill-card opacity-0 transform translate-y-6 transition duration-700"
             style="animation: pulse-tailwind 2s infinite;">
          <img src="https://raw.githubusercontent.com/tailwindlabs/tailwindcss/master/.github/logo-light.svg" alt="Tailwind" class="h-12 mx-auto mb-4">
          <p class="text-lg">Tailwind</p>
        </div>

        <div class="bg-gray-800 p-6 rounded-lg skill-card opacity-0 transform translate-y-6 transition duration-700"
             style="animation: pulse-python 2s infinite;">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" class="h-12 mx-auto mb-4">
          <p class="text-lg">PYTHON</p>
        </div>

        <div class="bg-gray-800 p-6 rounded-lg skill-card opacity-0 transform translate-y-6 transition duration-700"
             style="animation: pulse-csharp 2s infinite;">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C#" class="h-12 mx-auto mb-4">
          <p class="text-lg">C#</p>
        </div>
      </div>

      <div class="mt-12 justify-center">
        <a href="./documentos/Juanita_Perez.pdf" download
          class="inline-block px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-xl shadow-md hover:bg-yellow-300 transition duration-300 ease-in-out btn-animate">
          <i class="fas fa-download mr-2"></i> Descargar CV
        </a>
      </div>
    </section>
  `;

  // Insertar la sección en el contenedor
  const container = document.getElementById("habilidades-container");
  if (container) {
    container.innerHTML = habilidadesHTML;
  }

  // Mouse tracking para efectos visuales
  document.addEventListener('mousemove', handleMouseMove);

  // Activar animaciones al hacer scroll
  observeElements('section', 'show');
  observeElements('.skill-card', 'slide-in', 450);

  // Menú responsive para dispositivos móviles
  const menuBtn = document.getElementById('menu-btn');
  const menu = document.getElementById('menu');
  if (menuBtn && menu) {
    menuBtn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  }
});
