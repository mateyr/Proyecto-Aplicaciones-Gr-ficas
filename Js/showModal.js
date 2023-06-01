function createModal() {

  var modalPath = (window.location.pathname === '/index.html') ? 'iniciarsesion.html' : '../iniciarsesion.html'; // Get the current Path

  var modal = document.createElement("div");
  modal.classList.add("modal");

  // Realizar una solicitud AJAX
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        // Actualizar el contenido del modal con la respuesta del servidor
        modal.innerHTML = xhr.responseText;
        //Add the modal to the document
        document.body.appendChild(modal);
        // Add event to close the modal
        var closeModalBtn = modal.querySelector(".close");
        closeModalBtn.addEventListener("click", function () {
          closeModal(modal);
        });
      } else {
        // Manejar errores en la solicitud AJAX
        console.error("Error en la solicitud AJAX: " + xhr.status);
      }
    }
  };

  // Realizar la solicitud AJAX al servidor
  xhr.open("GET", modalPath, true);
  xhr.send();
}

function closeModal(modal) {
  document.body.removeChild(modal);
}

document.addEventListener("DOMContentLoaded", function () {
  var openModalBtn = document.getElementById("open-modal-btn");
  if (openModalBtn) {
    openModalBtn.addEventListener("click", function (event) {
      event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
      createModal();
    });
  }
});


/*Con respecto al Registrarse en vez de crear otro html, podemos tener el mismo html con dos div y se pueude trabajar a tráves de sus id, para hacerlo dinámico el cambio, al poder obtener el archivo html, podriamos solamente  document.body.appendChild(modal) agregar en vez del modal completo solo el que tenga el id correspondiente.

Por verificarse

*/ 