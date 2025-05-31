window.addEventListener("DOMContentLoaded", function () {
  //inicializando AOS

  const menuBtn = document.getElementById("menu-btn");

  if (menuBtn) {
    menuBtn.addEventListener("click", function () {
      menuBtn.classList.toggle("open");
    });
  }
});
