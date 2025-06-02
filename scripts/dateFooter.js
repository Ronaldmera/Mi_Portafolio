const dateContainer = document.getElementById("date");
let today = new Date();
dateContainer.textContent = today.getFullYear();
AOS.init(); //inicializando Aos
