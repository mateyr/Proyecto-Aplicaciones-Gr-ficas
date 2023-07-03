const productsAddToCart = document.querySelectorAll(".product-add-to-cart");

let products = [];

productsAddToCart.forEach((element) => {
  element.addEventListener("click", addToCart);
});


window.onload = function () {
    const data = localStorage.getItem('products');
    if (data) {
      products = JSON.parse(data);
    }
  };

function addToCart(event) {
  event.preventDefault();
  const previousSibling = event.target.previousElementSibling;
  const product = getProductInfo(previousSibling);
  products.push(product);
  localStorage.setItem("products", JSON.stringify(products));
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


updateBarCartIconNumber















/*function imprimirLocalStorage() {
    const data = localStorage.getItem('products');
    const productslist = JSON.parse(data);
    const productsArray = Array.from(productslist);
  
    productsArray.forEach(product => {
      console.log(product);
    });
  }

  imprimirLocalStorage();*/


