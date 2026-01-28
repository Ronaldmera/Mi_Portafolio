document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".writeText");

  const spanText = "Transformo";
  const normalText = " ideas en soluciones de software";

  container.innerHTML = "";

  const span = document.createElement("span");
  container.appendChild(span);

  let i = 0;
  let j = 0;

  function escribirSpan() {
    if (i < spanText.length) {
      span.textContent += spanText.charAt(i);
      i++;
      setTimeout(escribirSpan, 100);
    } else {
      escribirTexto();
    }
  }

  function escribirTexto() {
    if (j < normalText.length) {
      container.append(normalText.charAt(j));
      j++;
      setTimeout(escribirTexto, 100);
    }
  }

  escribirSpan();
});

const track = document.querySelector(".marquee-track");

// codigo de la barra de porcentaje

const barra = document.querySelector(".barraProgreso");
window.addEventListener("scroll", () => {
  const altura = document.documentElement.scrollHeight - window.innerHeight;
  const progreso = (window.scrollY / altura) * 100;
  barra.style.width = progreso + "%";
});
