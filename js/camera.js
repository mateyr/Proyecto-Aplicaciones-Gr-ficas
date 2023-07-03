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

          const $btnCamara = document.getElementById('camara-btn');
          const $contenedor = document.getElementById('cam-container');
          
          const $contenedorHijo = document.getElementById('contenedor-img-principal-hijo');
          const $contenedorPadre = document.getElementById('contenedor-img-principal');
          
          const $contenedorBotonesFoto = document.getElementById('container-btns-foto');
          const $btnCancelar = document.getElementById('btnCancelar-foto');
          const $btnGuardar = document.getElementById('btnGuardar-foto');
          
          var stream = document.getElementById('stream')
          var capture = document.getElementById('capture')
          var snapshot = document.getElementById('snapshot')
          
          const imgChooser = document.getElementById('img-chooser');
          const imgPrincipal = document.getElementById('cont-new-img');
          
          let takePicture = true;
          let firstTime = true;
          
          $btnCamara.addEventListener('click', () => {
          
              if(firstTime){
                  $contenedor.style.zIndex = "1003";
                  startStreaming();
                  snapshot.style.opacity = '0';
                  $contenedorBotonesFoto.style.opacity = '1'
                  takePicture = true;
                  firstTime = false;
              }
          
          })
          
          $btnGuardar.addEventListener('click', () => {
              if(takePicture && ($btnGuardar.textContent.includes('Tomar Foto'))){
          
                  if(takePicture && !firstTime){
                      captureSnapshot();
                      snapshot.style.opacity = '1'
                      takePicture = false;
          
                      $btnGuardar.textContent = 'Guardar';
                      $btnCancelar.textContent = 'Borrar Foto';
                  }else{
                      snapshot.style.opacity = '0';
                      takePicture = true;
                  }
          
              }else{
          
                  stopStreaming();
                  $contenedor.style.zIndex = "0";
                  $contenedorBotonesFoto.style.opacity = '0'
                  firstTime = true;
                  $btnGuardar.textContent = 'Tomar Foto';
                  imgChooser.style.opacity = '0';
                  imgPrincipal.style.opacity = '0';
              }
          })
          
          $btnCancelar.addEventListener('click', () => {
          
              if($btnCancelar.textContent.includes('Cancelar')){
          
                  stopStreaming();
                  $contenedor.style.zIndex = "0";
                  $contenedorBotonesFoto.style.opacity = '0'
                  firstTime = true;
                  imgChooser.style.opacity = '0.1';
              }else{
                  snapshot.style.opacity = '0';
                  takePicture = true;
                  $btnGuardar.textContent = 'Tomar Foto';
                  $btnCancelar.textContent = 'Cancelar';
              }
          
          })
          //------------------------ cam
          
          var cameraStream = null;
          
          function startStreaming(){
              var mediaSupport = 'mediaDevices' in navigator;
          
              if(mediaSupport && null == cameraStream){
                  navigator.mediaDevices.getUserMedia({video:true, audio: false}).then(function(mediaStream){
                      cameraStream = mediaStream;
                      stream.srcObject = mediaStream;
                      stream.play();
                  })
                  .catch(function(err){
                      alert('unable to access camera: ' + err);
                  });
              }else{
                  alert( 'Your browser does not support media devices.');
                  return;
              }
          }
          
          function stopStreaming() {
          
              if( null != cameraStream ) {
          
                  var track = cameraStream.getTracks()[ 0 ];
          
                  track.stop();
                  stream.load();
          
                  cameraStream = null;
              }
          }
          
          function captureSnapshot() {
          
              if( null != cameraStream ) {
          
                  var ctx = capture.getContext( '2d' );
                  var img = new Image();
          
                  ctx.drawImage( stream, 0, 0, capture.width, capture.height );
          
                  img.src        = capture.toDataURL( "image/png" );
                  img.width    = 241;
                  img.height = 180;
                  snapshot.innerHTML = '';
          
                  snapshot.appendChild( img );
              }
          }
        
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
  });
  
  
  /*Esto ha sido una manera diferente de hacer el login y register dinámico con una solicitud AJAX la otra manera común y más sencilla seria agregar los elementos div (login y register) a cada uno de los archivos html donde se mostraran así hacer que se muestren y desaparezcan sera más sencillo*/
  
  
  
  
  
  
  




