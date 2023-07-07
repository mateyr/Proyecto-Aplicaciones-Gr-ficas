const productsAddToCart = document.querySelectorAll(".product-add-to-cart");
let products = [];

window.onload = function () {
  const data = localStorage.getItem("products");
  if (data) {
    products = JSON.parse(data);
  }
};

document.addEventListener("DOMContentLoaded", function () {
  productsAddToCart.forEach((addToCartButton) => {
    addToCartButton.addEventListener("click", function (event) {
      addToCart(event, addToCartButton);
    });
  });
});

function addToCart(event, addToCartButton) {
  event.preventDefault();
  addToCartButton.removeEventListener("click", addToCart); // Remover el evento de escucha

  const productItem = addToCartButton.closest(".product");
  const previousSibling = productItem.querySelector(".product-cta");

  if (previousSibling) {
    const product = getProductInfo(previousSibling);
    if (product) {
      products.push(product);
      localStorage.setItem("products", JSON.stringify(products));

      // Verificar si ya existe el botón y el icono de ver en el carrito
      let cartLink = productItem.querySelector(".added_to_cart");
      if (!cartLink) {
        cartLink = document.createElement("a");
        cartLink.href = "carrito.html";
        cartLink.className = "added_to_cart";
        cartLink.title = "View cart";
        cartLink.textContent = "Ver en el Carrito";
        productItem.appendChild(cartLink);
      }

      console.log(addToCart);

      addToCartButton.textContent = "Agregado";

      // Cambiar el icono del carrito por el icono de check
      const cartIcon = addToCartButton.querySelector(".fa-solid.fa-cart-shopping");
      if (cartIcon) {
        cartIcon.className = "fa-regular fa-circle-check";
      }
    }
  } else {
    console.error("Error: No se encontró el elemento 'previousSibling'.");
  }
}

function getProductInfo(product) {
  const productInfo = {
    imagen: product.querySelector(".product-img").src,
    title: product.querySelector(".product__title").textContent,
    price: product.querySelector(".price-amount bdi").innerText,
    quantity: 1,
  };
  return productInfo;
}
