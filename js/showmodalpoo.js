/*Para esta manera se debe eliminar la clase hideModal del container directamente del html*/

class Modal {
  constructor(content) {
    this.content = content;
    this.isVisible = false;
    this.toggleLink = content.querySelector(".toggle-link");
  }

  show() {
    this.content.classList.remove("hideModal");
    this.isVisible = true;
  }

  hide() {
    this.content.classList.add("hideModal");
    this.isVisible = false;
  }

  toggle() {
    if (this.isVisible) {
      this.hide();
    } else {
      this.show();
    }
  }

  getToggleLinkContent() {
    return this.toggleLink.textContent;
  }
}

const loginModalContent = document.createElement("div");
loginModalContent.classList.add("modal-login", "hideModal");
loginModalContent.innerHTML = `
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
  `;

const registerModalContent = document.createElement("div");
registerModalContent.classList.add("modal-register", "hideModal");
registerModalContent.innerHTML = `<div class="modal-content">
  <div class="modal-left">
    <img src="../img/IniciarSesiónImg.webp" alt="Imagen de registro" />
  </div>
  <div class="modal-relative">
    <div class="modal-right">
      <span class="close">&times;</span>
      <h2>Registrarse</h2>
      <h3>Crea tu cuenta en segundos</h3>
      <!--<div class="contenedor-img-principal" id="contenedor-img-principal">
        <div
          class="contenedor-img-principal-hijo"
          id="contenedor-img-principal-hijo"
        >
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
          <div class="camara-btn" id="camara-btn">
            <img loading="lazy" src="../img/cameraicon.png" alt="" />
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
      </div>-->
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
  `;

const modalContainer = document.querySelector(".modalContainer");
const loginModal = new Modal(loginModalContent);
const registerModal = new Modal(registerModalContent);

modalContainer.appendChild(loginModal.content);
modalContainer.appendChild(registerModal.content);

document.getElementById("open-modal-btn").addEventListener("click", () => {
    loginModal.toggle();
});

const toggleLinks = document.querySelectorAll(".toggle-link");
toggleLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Evita que el enlace redirija
    if (event.target.closest(".modal-login")) {
      registerModal.show(); // Mostrar modal de registro
      loginModal.hide(); // Ocultar modal de inicio de sesión
    } else if (event.target.closest(".modal-register")) {
      loginModal.show(); // Mostrar modal de inicio de sesión
      registerModal.hide(); // Ocultar modal de registro
    }
  });
});

const closeButtons = document.querySelectorAll(".close");
closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    loginModal.hide();
    registerModal.hide();
  });
});
