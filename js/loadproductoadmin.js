function getProductFromLocalStorage() {
    const data = localStorage.getItem("products");
    return data ? Array.from(JSON.parse(data)) : undefined;
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const btnEliminarBarra = document.querySelectorAll(".eliminar-libro-barra");
    const inputCantidad = document.querySelectorAll(".cantidad");
  
    btnEliminarBarra.forEach((boton) => {
      boton.addEventListener("click", () => code);
    });
  });
  
  const productsContainer = document.querySelector(".productos__container");
  
  function loadProductInCart() {
    if (getProductFromLocalStorage() !== undefined) {
      getProductFromLocalStorage().forEach((product) => {
        const row = document.createElement("DIV");
        row.classList.add("producto-carrito");
  
        row.innerHTML = `<div class="product-row efecto-scroll">
          <div class="product__delete">
            <img
              src="../img/deleteicon.png"
              class="btnEliminarRowCarrito"
              alt="Icono eliminar producto en carrito"
            />
          </div>
          <div class="product-img">
            <img
              src="${product.imagen}"
              alt="Imagen del producto en carrito"
            />
          </div>
          <p class="procduct-title">${product.title}</p>
          <p class="product-price">USD ${Number(
            product.price.replace("$", "")
          )}</p>
          <input
            class="quantity"
            type="number"
            value="${product.quantity}"
            min="1"
          />
          <p class="subtotal subtotal-table">
          USD ${Number(product.price.replace("$", "")) * Number(product.quantity)}
          </p>
        </div>`;
        productsContainer.appendChild(row);
      });
    }
  }
  
  window.onload = function () {
    loadProductInCart();
  };
    
  /*<div class="producto-carrito-pequenio efecto-scroll">
  <div class="producto-carrito-mobile">
      <div class="producto-carrito__imagen">
          <img src="${
            product.imagen
          }" alt="Imagen del producto en carrito">
      </div>
  
      <div class="producto-carrito-mobile__detalles">
          <p class="nombre-libro-carrito">${
            product.title
          }</p>
          <p>Precio: <span class="precio-carrito">USD ${Number(
            product.price.replace("USD ", "")
          )}</span></p>
          <p>Cantidad: <input class="cantidad cantidad--mobile" type="number" value="${
            product.quantity
          }" min="1"></p>
          <p class="subtotal-carrito">Subtotal: <span>USD ${(
            Number(product.price.replace("USD ", "")) *
            Number(product.quantity)
          ).toFixed(2)}</span></p>
      </div>
      
      <div class="producto-carrito__eliminar">
          <img src="../img/deleteicon.png" class="btnEliminarRowCarrito" alt="Icono eliminar producto en carrito">
      </div>
  </div>*/
  