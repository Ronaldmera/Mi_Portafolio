window.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menu-btn");
  const navbarCollapse = document.getElementById("navbarNavDropdown");
  const navbarLinks = document.querySelectorAll(".navbar-nav .nav-link");

  // Inicializa el colapso de Bootstrap
  const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
    toggle: false,
  });

  // Alternar clase para la animación del botón hamburguesa
  if (menuBtn) {
    menuBtn.addEventListener("click", function () {
      menuBtn.classList.toggle("open");
    });
  }

  // Cierra el menú y quita animación de botón al hacer clic en un enlace
  navbarLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navbarCollapse.classList.contains("show")) {
        bsCollapse.hide();
        menuBtn.classList.remove("open"); // Cierra la animación del botón
      }
    });
  });
});
