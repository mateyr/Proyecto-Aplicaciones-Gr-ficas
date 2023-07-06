const modalContainer = document.querySelector(".modalContainer");
function addDynamicHTML() {
  return new Promise((resolve, reject) => {
    try {
      modalContainer.innerHTML = `<div class="modal-login">
      <div class="modal-content">
        <div class="modal-left">
          <img src="../img/IniciarSesiónImg.webp" alt="Imagen de registro" />
        </div>
        <div class="modal-relative">
          <div class="modal-right">
            <span class="close">&times;</span>
            <h2>Iniciar Sesión</h2>
            <h3>Ingresa tus datos para iniciar</h3>
            <form class="modal-right-form">
              <div>
                <input
                  class="modal-input"
                  type="text"
                  id="nombre-login"
                  name="nombre"
                  required
                  placeholder="Nombre"
                />
              </div>
              <div>
                <input
                  class="modal-input"
                  type="password"
                  id="contraseña-login"
                  name="contraseña"
                  required
                  placeholder="Contraseña"
                />
              </div>
              <div class="form__recuperar">
                <a href="#">¿Olvidaste tu contraseña?</a>
              </div>
              <div class="submit__container">
                <input type="submit" value="Iniciar Sesión" />
              </div>
            </form>
            <p>
              ¿No tienes una cuenta? <a href="#" class="toggle-link">Registrarse</a>
            </p>
            <p>Continúa con:</p>
            <div class="social-icons">
              <a href="#"><i class="fab fa-facebook-f facebook-color"></i></a>
              <a href="#"><i class="fab fa-twitter twitter-color"></i></a>
              <a href="#"><i class="fab fa-google google-color"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!--Segundo Div-->
    <div class="modal-register hideModal">
      <div class="modal-content">
        <div class="modal-left">
          <img src="../img/IniciarSesiónImg.webp" alt="Imagen de registro" />
        </div>
        <div class="modal-relative">
          <div class="modal-right">
            <span class="close">&times;</span>
            <h2>Registrarse</h2>
            <h3>Crea tu cuenta en segundos</h3>
               <div class="contenedor-img-principal" id="contenedor-img-principal">
          <div
            class="contenedor-img-principal-hijo"
            id="contenedor-img-principal-hijo"
          >
            <div class="camara-btn" id="camara-btn">
              <img class="camera-icon"  loading="lazy" src="../img/camara-web.png" alt=""/>
              <input type="file" name="image" id="image-input">
            </div>
            <div class="contedor-img" id="contedor-img">
              <img
                loading="lazy"
                src="../img/usericon.png"
                alt=""
                id="img-chooser"
              />
            </div>
            <div class="file-result" id="file-result">
            <div id="txt-arrastre">
              Arrastra o dale clic para elegir tu imagen
            </div>
          </div>
            <div class="cont-new-img" id="cont-new-img">
              <img loading="lazy" id="img-new" alt="" />
            </div>
            <div class="cam-container" id="cam-container">
              <video id="stream"></video>
              <canvas id="capture"></canvas>
              <div id="snapshot"></div>
            </div>
          </div>
          <div class="container-btns-foto" id="container-btns-foto">
            <div class="btnGuardar-foto" id="btnGuardar-foto">Tomar Foto</div>
            <div class="btnCancelar-foto" id="btnCancelar-foto">Cancelar</div>
          </div>
        </div>
            <form class="modal-right-form">
              <div class="input__container">
                <input
                  class="modal-input"
                  type="text"
                  id="nombre-register"
                  name="nombre"
                  required
                  placeholder="Nombre"
                />
              </div>
              <div>
                <input
                  class="modal-input"
                  type="email"
                  id="email-register"
                  name="correo"
                  required
                  placeholder="Correo"
                />
              </div>
              <div>
                <input
                  class="modal-input"
                  type="password"
                  id="contraseña-register"
                  name="contraseña"
                  required
                  placeholder="Contraseña"
                />
              </div>
              <div class="terms">
                <input
                  type="checkbox"
                  id="acepto-terminos"
                  name="acepto-terminos"
                  required
                />
                <label for="acepto-terminos">Acepto los términos</label>
              </div>
              <div class="submit__container">
                <input type="submit" value="Crear Cuenta" />
              </div>
            </form>
            <p>
              ¿Ya tienes una cuenta?
              <a href="#" class="toggle-link">Iniciar Sesión</a>
            </p>
            <p>Continúa con:</p>
            <div class="social-icons">
              <a href="#"><i class="fab fa-facebook-f facebook-color"></i></a>
              <a href="#"><i class="fab fa-twitter twitter-color"></i></a>
              <a href="#"><i class="fab fa-google google-color"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>`;
      resolve();
    } catch (error) {
      reject(error);
    }
  });
}

function showModal() {
  modalContainer.classList.toggle("hideModal");
  if (modalContainer.hasChildNodes()) {
    /*Si el modal ya se agrego simplemente con retornamos no es necesario agregarlo de nuevo*/
    console.log("Ya se agrego");
    return;
  }

  addDynamicHTML()
    .then(() => {
      startCamera();
    })
    .catch((error) => {
      console.error("Error al agregar el HTML dinámicamente:", error);
    });

  /*Asignamos Eventos de toggle*/
  const registerLink = document.querySelectorAll(".toggle-link");

  registerLink.forEach(function (link) {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      toggleModalContent();
    });
  });

  const closeModalBtns = document.querySelectorAll(".close");

  closeModalBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      modalContainer.classList.toggle("hideModal");
      if (loginContent.classList.contains("hideModal")) {
        loginContent.classList.remove("hideModal");
        registerContent.classList.add("hideModal");
      }
    });
  });

  let loginContent = document.querySelector(".modal-login");
  let registerContent = document.querySelector(".modal-register");

  function toggleModalContent() {
    if (loginContent && registerContent) {
      loginContent.classList.toggle("hideModal");
      registerContent.classList.toggle("hideModal");
    }
  }
}


/*Agregar eventos*/

/*Button to create and show the modal*/
/*
document.getElementById("open-modal-btn").addEventListener("click", (event) => {
  event.preventDefault();
  showModal();
});*/

const openModalBtn = document.getElementById("open-modal-btn");
openModalBtn.addEventListener("click", (event) => {
  event.preventDefault();
  showModal();
});

const openModalBtnHamburger = document.getElementById("open-modal-btn-hamburger");
openModalBtnHamburger.addEventListener('click',(event) => {
  event.preventDefault();
  showModal();
});

/*Camara Stuff*/

function startCamera() {
  const $btnCamara = document.getElementById("camara-btn");
  const $contenedor = document.getElementById("cam-container");

  const $contenedorHijo = document.getElementById(
    "contenedor-img-principal-hijo"
  );
  const $contenedorPadre = document.getElementById("contenedor-img-principal");

  const $contenedorBotonesFoto = document.getElementById("container-btns-foto");
  const $btnCancelar = document.getElementById("btnCancelar-foto");
  const $btnGuardar = document.getElementById("btnGuardar-foto");

  var stream = document.getElementById("stream");
  var capture = document.getElementById("capture");
  var snapshot = document.getElementById("snapshot");

  const imgChooser = document.getElementById("img-chooser");
  const imgPrincipal = document.getElementById("cont-new-img");

  let takePicture = true;
  let firstTime = true;

  $btnCamara.addEventListener("click", () => {
    if (firstTime) {
      $contenedor.style.zIndex = "1003";
      startStreaming();
      snapshot.style.opacity = "0";
      $contenedorBotonesFoto.style.opacity = "1";
      takePicture = true;
      firstTime = false;
    }
  });

  $btnGuardar.addEventListener("click", () => {
    if (takePicture && $btnGuardar.textContent.includes("Tomar Foto")) {
      if (takePicture && !firstTime) {
        captureSnapshot();
        snapshot.style.opacity = "1";
        takePicture = false;

        $btnGuardar.textContent = "Guardar";
        $btnCancelar.textContent = "Borrar Foto";
      } else {
        snapshot.style.opacity = "0";
        takePicture = true;
      }
    } else {
      stopStreaming();
      $contenedor.style.zIndex = "0";
      $contenedorBotonesFoto.style.opacity = "0";
      firstTime = true;
      $btnGuardar.textContent = "Tomar Foto";
      imgChooser.style.opacity = "0";
      imgPrincipal.style.opacity = "0";
    }
  });

  $btnCancelar.addEventListener("click", () => {
    if ($btnCancelar.textContent.includes("Cancelar")) {
      stopStreaming();
      $contenedor.style.zIndex = "0";
      $contenedorBotonesFoto.style.opacity = "0";
      firstTime = true;
      imgChooser.style.opacity = "1";
    } else {
      snapshot.style.opacity = "0";
      takePicture = true;
      $btnGuardar.textContent = "Tomar Foto";
      $btnCancelar.textContent = "Cancelar";
    }
  });
  //------------------------ cam

  var cameraStream = null;

  function startStreaming() {
    var mediaSupport = "mediaDevices" in navigator;

    if (mediaSupport && null == cameraStream) {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: false })
        .then(function (mediaStream) {
          cameraStream = mediaStream;
          stream.srcObject = mediaStream;
          stream.play();
        })
        .catch(function (err) {
          alert("unable to access camera: " + err);
        });
    } else {
      alert("Your browser does not support media devices.");
      return;
    }
  }

  function stopStreaming() {
    if (null != cameraStream) {
      var track = cameraStream.getTracks()[0];

      track.stop();
      stream.load();

      cameraStream = null;
    }
  }

  function captureSnapshot() {
    if (null != cameraStream) {
      var ctx = capture.getContext("2d");
      var img = new Image();

      ctx.drawImage(stream, 0, 0, capture.width, capture.height);

      img.src = capture.toDataURL("image/png");
      /*img.width = 241;*/
      /*img.height = 180;*/
      snapshot.innerHTML = "";

      snapshot.appendChild(img);
    }
  }
}
/*function imageChooser() {
  const $contenedor = document.getElementById("cam-container");
  const $fileInput = document.getElementById("image-input");
  const $dragZone = document.getElementById("file-result");
  const $img = document.getElementById("img-new");

  $dragZone.addEventListener("click", () => $fileInput.click());

  $dragZone.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  $dragZone.addEventListener("dragleave", (e) => {
    e.preventDefault();
  });

  const uploadImage = (file) => {
    document.getElementById("cont-new-img").style.opacity = "1";
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.addEventListener("load", (e) => {
      $img.setAttribute("src", e.target.result);
    });

    console.log($img);

    document.getElementById("cont-new-img").style.zIndex = "1000";
    document.getElementById("contedor-img").position = "absolute";
    document.getElementById("contedor-img").style.zIndex = "1000";

    document.getElementById("file-result").position = "relative";
    document.getElementById("file-result").style.zIndex = "1002";

    document.getElementById("img-chooser").style.opacity = "0";

    document.getElementById("txt-arrastre").style.opacity = "0";
  };

  $dragZone.addEventListener("drop", (e) => {
    e.preventDefault();

    $fileInput.files = e.dataTransfer.files;
    const file = $fileInput.files[0];
    uploadImage(file);
  });

  $fileInput.addEventListener("change", (e) => {
    const file = $fileInput.files[0];
    uploadImage(file);
  });
}*/
