const dateContainer = document.getElementById("date");
let today = new Date();
dateContainer.textContent = today.getFullYear();
AOS.init({
  //   duration: 700,
  once: true,
  offset: 100,
  disable: "mobile",
});
