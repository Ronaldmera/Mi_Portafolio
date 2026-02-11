const dateContainer = document.getElementById("date");
let today = new Date();
dateContainer.textContent = today.getFullYear();

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
    rootMargin: "0px 0px -20% 0px",
  },
);

document.querySelectorAll(".fade-up").forEach((el) => {
  observer.observe(el);
});
