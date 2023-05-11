const products = [
  {
    id: 1,
    name: "Apple watch",
    price: 25,
    desc: "lorem ipsum",
    img: "./New-Project-2022-10-07T083221.961_png.webp",
    stock: 5,
  },
  {
    id: 2,
    name: "Honor watch",
    price: 33,
    desc: "lorem ipsum",
    img: "./as-images.apple_-4_png.webp",
    stock: 7,
  },
  {
    id: 3,
    name: "Samsung watch",
    price: 20,
    desc: "lorem ipsum",
    img: "./TM-DG-SMW-1106-SW-0291_484fc5e0a28db9ed9670e2fbb2d99c8a_w_png.webp",
    stock: 9,
  },
  {
    id: 4,
    name: "Xiomi watch",
    price: 5,
    desc: "lorem ipsum",
    img: "./TM-MT-BMT-1198-PA-0031_4f450dd1764443e403f1f85c66719335_w.jpg",
    stock: 10,
  },
  {
    id: 5,
    name: "Nokia watch",
    price: 50,
    desc: "lorem ipsum",
    img: "./TM-MT-BMT-1198-PA-0010_7fc3b1ceaa787e2ac7f09b2c35babb7a_w_png.webp",
    stock: 15,
  },
];

let cartItems = [];

const wrapper = document.getElementById("wrapper");
const cartWrapper = document.getElementById("cart");
let subtotalWrapper = document.getElementById("subtotal");

function handleRenderProducts() {
  products.map((product) => {
    wrapper.innerHTML += `
    <div class="card">
    <img
      src="${product.img}"
      alt=""
    />
    <div class="body">
      <div class="heading">
        <h4>${product.name}</h4>
        <b>${product.price}$</b>
      </div>
      <p>
       ${product.desc}
      </p>
    </div>
    <div class="footer">
      <button onclick="handleAddToCart(${product.id});">Add to cart</button>
    </div>
  </div>
    `;
  });
}

handleRenderProducts();

function handleAddToCart(id) {
  const currentProduct = products.find((product) => product.id === id);

  const isExist = cartItems.some((item) => item.id === id);

  if (isExist) {
    alert("This item already in the cart!");
  } else {
    cartItems.push({ ...currentProduct, count: 1 });
    updateCartItems();
  }

  calculateSubTotal();
}

function updateCartItems() {
  renderCartItems();
  calculateSubTotal();
}

function renderCartItems() {
  const ul = cartWrapper.getElementsByTagName("ul")[0];
  ul.innerHTML = "";
  cartItems.map((item) => {
    ul.innerHTML += `
                <li>
                <b>${item.id}</b>
                <div class="image-wrap">
                  <img src="${item.img}" alt="" />
                </div>
                <span>${item.name}</span>
                <span class="desc"
                  >${item.desc}</span
                >
                <b>${item.price}$</b>
                <div class="count">
                  <button onclick="handleChangeCount('minus', ${item.id});">-</button>
                  <b>${item.count}</b>
                  <button onclick="handleChangeCount('plus', ${item.id});">+</button>
                </div>
                <button class="remove-btn" onclick="handleRemoveItem(${item.id});">X</button>
              </li>
                `;
  });
}

function handleChangeCount(action, id) {
  cartItems = cartItems.map((item) => {
    var productCount = item.count;

    if (item.id === id) {
      if (action === "minus") {
        if (productCount > 1) {
          productCount--;
        }
      } else {
        if (productCount < item.stock) {
          productCount++;
        }
      }
    }

    return {
      ...item,
      count: productCount,
    };
  });

  updateCartItems();
}

function handleRemoveItem(id) {
  cartItems = cartItems.filter((item) => item.id !== id);

  updateCartItems();
}

function calculateSubTotal() {
  var subtotal = 0;
  var totalProductCount = 0;

  cartItems.map((item) => {
    subtotal += item.price * item.count;
    totalProductCount += item.count;
  });

  subtotalWrapper.innerHTML = `
        <li>Total: ${subtotal}</li>
        <li>Total item count: ${totalProductCount}</li>
  `;
}
