let iconCart = document.querySelector(".icon-cart");
let closeCart = document.querySelector(".close");
let listProductsHTML = document.querySelector(".listProduct");
let listProducts = [];

let body = document.querySelector("body");
iconCart.addEventListener("click", () => {
  console.log("object");
  body.classList.toggle("showCart");
});

closeCart.addEventListener("click", () => {
  body.classList.toggle("showCart");
});

const addDataToHTML = () => {
  listProductsHTML.innerHTML = "";
  if (listProducts.length > 0) {
    listProducts.forEach((product) => {
      let newProduct = document.createElement("div");
      newProduct.classList.add("item");
      newProduct.innerHtml = `
      <img src="image/1.png" alt="">
                <h2>NAME PRODUCT</h2>
                <div class="price">$200</div>
                <button>Add to cart</button>
      `;
      listProductsHTML.appendChild(newProduct);
    });
  }
};

const initApp = () => {
  fetch("products.json")
    .then((res) => res.json())
    .then((data) => {
      listProducts = data;
      addDataToHTML();
      console.log(listProducts);
    });
};

initApp();
