
  const form = document.querySelector("form");
  const mensaje = document.getElementById("mensaje-gracias");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = form.querySelector('input[type="text"]').value;

    // Mensaje personalizado
    mensaje.textContent = `¡Gracias por contactarme, ${nombre }!`;
    mensaje.classList.remove("hidden");
    mensaje.style.opacity = 1;

    // Ocultar después de 5 segundos
    setTimeout(() => {
      mensaje.style.opacity = 0;
      setTimeout(() => mensaje.classList.add("hidden"), 500); 
    }, 5000);

    form.reset();
  });

