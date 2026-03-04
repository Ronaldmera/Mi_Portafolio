const track = document.querySelector(".marquee-track");

// codigo de la barra de porcentaje

const barra = document.querySelector(".barraProgreso");
window.addEventListener("scroll", () => {
  const altura = document.documentElement.scrollHeight - window.innerHeight;
  const progreso = (window.scrollY / altura) * 100;
  barra.style.width = progreso + "%";
});
