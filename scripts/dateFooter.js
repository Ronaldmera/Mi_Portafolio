const dateContainer = document.getElementById("date");
let today = new Date();
dateContainer.textContent = today.getFullYear();
AOS.init({
  once: true,
  offset: 100,
  disable: "mobile",
});
//carrusel para proyectos de desarrollo web
const swiperWeb = new Swiper(".swiper-web", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 5500, // tiempo entre cada movimiento
    disableOnInteraction: false, // sigue después de tocar
  },
  // slidesPerView: "auto",
  spaceBetween: 20,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    650: {
      slidesPerView: 2,
      slidesPerGroup: 1,
    },
    992: {
      slidesPerView: 3,
      slidesPerGroup: 1,
    },
  },
});

//contadores dinamicos seccion stats(estadisticas)
const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const counter = entry.target;
      const target = Number(counter.dataset.target);

      let current = 0;
      const duration = 900;
      const startTime = performance.now();

      function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        current = Math.floor(progress * target);

        counter.textContent = current;

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target;
        }
      }

      requestAnimationFrame(updateCounter);

      observer.unobserve(counter);
    });
  },
  {
    threshold: 0.5,
  },
);

counters.forEach((counter) => {
  observer.observe(counter);
});
