function createModal() {
    /*var modalPath =
      window.location.pathname === "/index.html" ||
      window.location.pathname === "/"
        ? "html/iniciarsesion.html"
        : "iniciarsesion.html";*/
  
  var modal = document.createElement("div");
    // Realizar una solicitud AJAX
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          // Obtener la respuesta del servidor
          modal.innerHTML = xhr.responseText;
          document.body.appendChild(modal);
          // Agregar eventos para cerrar el modal y cambiar entre los modales
          var closeModalBtns = modal.querySelectorAll(".close");
          closeModalBtns.forEach(function (btn) {
            btn.addEventListener("click", function () {
              closeModal(modal);
            });
          });
          var registerLink = modal.querySelectorAll(".toggle-link");
          registerLink.forEach(function (link) {
            link.addEventListener("click", function (event) {
              event.preventDefault();
              toggleModalContent(modal);
            });
          });
        } else {
          // Manejar errores en la solicitud AJAX
          console.error("Error en la solicitud AJAX: " + xhr.status);
        }
      }
    };
    // Realizar la solicitud AJAX al servidor
    xhr.open("GET", "iniciarsesion.html", true);
    xhr.send();
  }
  
  function closeModal(modal) {
    document.body.removeChild(modal);
  }
  
  /*Esto funciona debido a que el modal-register tiene inicialmente el estilo display none, que sirve para que no se muestren los dos al agregarlos al body*/
  function toggleModalContent(modal) {
    var loginContent = modal.querySelector(".modal-login");
    var registerContent = modal.querySelector(".modal-register");
  
    if (loginContent && registerContent) {
      var computedStyles = window.getComputedStyle(registerContent);
      var registerDisplayStyle = computedStyles.getPropertyValue("display");
  
      if (registerDisplayStyle === "none") {
        loginContent.style.display = "none";
        registerContent.style.display = "block";
      } else {
        loginContent.style.display = "block";
        registerContent.style.display = "none";
      }
    }
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    var openModalBtn = document.querySelectorAll(".nav__link--last");
    if (openModalBtn) {
      openModalBtn.forEach(function (btn) {
        btn.addEventListener("click", function (event) {
          event.preventDefault();
          createModal();
        });
      });
    }
  })
  
  /*Esto ha sido una manera diferente de hacer el login y register dinámico con una solicitud AJAX la otra manera común y más sencilla seria agregar los elementos div (login y register) a cada uno de los archivos html donde se mostraran así hacer que se muestren y desaparezcan sera más sencillo*/
  