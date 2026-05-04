const dateContainer = document.getElementById("date");
let today = new Date();
dateContainer.textContent = today.getFullYear();
AOS.init({
  once: true,
  offset: 100,
  disable: "mobile",
});
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
const swiperAutomatizacion = new Swiper(".swiper-automatizacion", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  // slidesPerView: "auto",
  spaceBetween: 20,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
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
    },
  },
});
