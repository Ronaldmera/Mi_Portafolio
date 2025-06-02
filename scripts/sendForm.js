document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("LL7zHTKhOzljSR30E");

  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const loader = document.querySelector(".box-loader");
      const modal = document.querySelector(".modal");
      const textModal = document.querySelector(".text-status-form");
      if (!this.checkValidity()) {
        return;
      }
      document.body.classList.add("no-scroll");
      loader.style.display = "flex"; // Mostrar loader

      let params = {
        to_name: "Ronald",
        from_name: document.getElementById("from_name").value,
        from_email: document.getElementById("from_email").value,
        comment: document.getElementById("comment").value,
      };

      emailjs
        .send("service_wf0k9lp", "template_q6img3o", params)

        .then((response) => {
          //   console.log("Correo enviado con éxito:", response);
          textModal.textContent = "Mensaje enviado correctamente";
          const bsModal = new bootstrap.Modal(
            document.getElementById("statusModal")
          );
          bsModal.show();

          this.reset();
        })
        .catch((error) => {
          //   console.error("Error al enviar el correo:", error);
          textModal.textContent = "Hubo un error al enviar el mensaje";
        })
        .finally(() => {
          loader.style.display = "none"; // Ocultar loader después de la respuesta
          document.body.classList.remove("no-scroll"); //  Habilitar scroll otra vez
        });
    });
});
