const track = document.querySelector(".marquee-track");

// codigo de la barra de porcentaje

const barra = document.querySelector(".barraProgreso");
window.addEventListener("scroll", () => {
  const altura = document.documentElement.scrollHeight - window.innerHeight;
  const progreso = (window.scrollY / altura) * 100;
  barra.style.width = progreso + "%";
});

// codigo mostrar y ocultar  cards en projectos
let btn = document.querySelector(".btn-show-more");
let containerProjects = document.querySelector(".container-projects");
let card = `
<div class="col-md-6 col-lg-4 card-extra">
   <div class="card h-100 w-100">
    <img
      src="/assets/images/projects/adm.webp"
      class="card-img-top"
      alt="ADM Tasks"
      loading="lazy"
      draggable="false"
    />
    <div class="card-body d-flex flex-column">
      <h4 class="card-title text-center">ADM Tasks</h4>
      <p class="card-text">
        Aplicación web para crear, editar y organizar tareas personales.
      </p>

      <div class="technologies pb-3">
        <h5 class="text-center">Tecnologías</h5>

        <div class="container-tech-list">
          <ul class="list-unstyled d-flex gap-2 flex-wrap justify-content-center">
            <li class="p-1 rounded-1">HTML</li>
            <li class="p-1 rounded-1">CSS</li>
            <li class="p-1 rounded-1">JavaScript</li>
            <li class="p-1 rounded-1">MySQL</li>
            <li class="p-1 rounded-1">GitHub</li>
            <li class="p-1 rounded-1">Laravel</li>
          </ul>
        </div>
      </div>

      <a
        href="https://github.com/Ronaldmera/admTareas/"
        target="_blank"
        class="btn mt-auto d-flex justify-content-center"
      >
        Explorar
      </a>

    </div>
  </div>
</div>
`;

function agregarTextoBtn(btn) {
  let text = btn.textContent.trim();
  if (text == "Ver más") {
    btn.textContent = "Ver menos";
  } else {
    btn.textContent = "Ver más";
  }
}
let existscard = false;
btn.addEventListener("click", () => {
  if (!existscard) {
    containerProjects.insertAdjacentHTML("beforeend", card);
    existscard = true;
  } else {
    containerProjects.removeChild(document.querySelector(".card-extra"));
    existscard = false;
  }
  agregarTextoBtn(btn);
});
