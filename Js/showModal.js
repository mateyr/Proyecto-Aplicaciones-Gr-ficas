document.addEventListener("DOMContentLoaded", function() {
  var openModalBtn = document.getElementById("open-modal-btn");
  var modalContainer = document.getElementById("modal-container");

  openModalBtn.addEventListener("click", function() {
    fetch("C:\Users\LENOVO\Desktop\mateyr.github.io\iniciarsesion.html")
      .then(response => response.text())
      .then(data => {
        modalContainer.innerHTML = data;
      })
      .catch(error => console.log(error));
  });

  // Agrega el código para cerrar el modal 
});