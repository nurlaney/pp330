// const products = [
//   {
//     id: 1,
//     name: "Apple watch",
//     price: 25,
//     desc: "lorem ipsum",
//     img: "./New-Project-2022-10-07T083221.961_png.webp",
//     stock: 5,
//   },
//   {
//     id: 2,
//     name: "Honor watch",
//     price: 33,
//     desc: "lorem ipsum",
//     img: "./as-images.apple_-4_png.webp",
//     stock: 7,
//   },
//   {
//     id: 3,
//     name: "Samsung watch",
//     price: 20,
//     desc: "lorem ipsum",
//     img: "./TM-DG-SMW-1106-SW-0291_484fc5e0a28db9ed9670e2fbb2d99c8a_w_png.webp",
//     stock: 9,
//   },
//   {
//     id: 4,
//     name: "Xiomi watch",
//     price: 5,
//     desc: "lorem ipsum",
//     img: "./TM-MT-BMT-1198-PA-0031_4f450dd1764443e403f1f85c66719335_w.jpg",
//     stock: 10,
//   },
//   {
//     id: 5,
//     name: "Nokia watch",
//     price: 50,
//     desc: "lorem ipsum",
//     img: "./TM-MT-BMT-1198-PA-0010_7fc3b1ceaa787e2ac7f09b2c35babb7a_w_png.webp",
//     stock: 15,
//   },
// ];

// let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

// const wrapper = document.getElementById("wrapper");
// const cartWrapper = document.getElementById("cart");
// let subtotalWrapper = document.getElementById("subtotal");

// function handleRenderProducts() {
//   products.map((product) => {
//     wrapper.innerHTML += `
//     <div class="card">
//     <img
//       src="${product.img}"
//       alt=""
//     />
//     <div class="body">
//       <div class="heading">
//         <h4>${product.name}</h4>
//         <b>${product.price}$</b>
//       </div>
//       <p>
//        ${product.desc}
//       </p>
//     </div>
//     <div class="footer">
//       <button onclick="handleAddToCart(${product.id});">Add to cart</button>
//     </div>
//   </div>
//     `;
//   });
// }

// handleRenderProducts();

// function handleAddToCart(id) {
//   const currentProduct = products.find((product) => product.id === id);

//   const isExist = cartItems.some((item) => item.id === id);

//   if (isExist) {
//     handleChangeCount("plus", id);
//   } else {
//     cartItems.push({ ...currentProduct, count: 1 });
//     updateCartItems();
//   }
// }

// function updateCartItems() {
//   renderCartItems();
//   calculateSubTotal();

//   localStorage.setItem("cart", JSON.stringify(cartItems));
// }

// function renderCartItems() {
//   const ul = cartWrapper.getElementsByTagName("ul")[0];
//   ul.innerHTML = "";
//   cartItems.map((item) => {
//     ul.innerHTML += `
//                 <li>
//                 <b>${item.id}</b>
//                 <div class="image-wrap">
//                   <img src="${item.img}" alt="" />
//                 </div>
//                 <span>${item.name}</span>
//                 <span class="desc"
//                   >${item.desc}</span
//                 >
//                 <b>${item.price}$</b>
//                 <div class="count">
//                   <button onclick="handleChangeCount('minus', ${item.id});">-</button>
//                   <b>${item.count}</b>
//                   <button onclick="handleChangeCount('plus', ${item.id});">+</button>
//                 </div>
//                 <button class="remove-btn" onclick="handleRemoveItem(${item.id});">X</button>
//               </li>
//                 `;
//   });
// }

// function handleChangeCount(action, id) {
//   cartItems = cartItems.map((item) => {
//     var productCount = item.count;

//     if (item.id === id) {
//       if (action === "minus") {
//         if (productCount > 1) {
//           productCount--;
//         }
//       } else {
//         if (productCount < item.stock) {
//           productCount++;
//         }
//       }
//     }

//     return {
//       ...item,
//       count: productCount,
//     };
//   });

//   updateCartItems();
// }

// function handleRemoveItem(id) {
//   cartItems = cartItems.filter((item) => item.id !== id);

//   updateCartItems();
// }

// function calculateSubTotal() {
//   var subtotal = 0;
//   var totalProductCount = 0;

//   cartItems.map((item) => {
//     subtotal += item.price * item.count;
//     totalProductCount += item.count;
//   });

//   subtotalWrapper.innerHTML = `
//         <li>Total: ${subtotal}</li>
//         <li>Total item count: ${totalProductCount}</li>
//   `;
// }

// updateCartItems();

// const form = document.getElementById("form");

// let isFormValid = false;

// let nameInput = document.getElementById("nameInput");
// let surnameInput = document.getElementById("surnameInput");
// let emailInput = document.getElementById("emailInput");
// let passwordInput = document.getElementById("passwordInput");
// let confirmPasswordInput = document.getElementById("confirmPasswordInput");
// let errorWrapper = document.getElementsByClassName("error");
// let fileInput = document.getElementsByClassName("drag-area")[0];

// function showError(input, message) {
//   const formControl = input.parentElement;
//   let errorElem = formControl.getElementsByClassName("error")[0];
//   errorElem.style.display = "block";
//   errorElem.innerText = message;
// }

// function showSuccess(input) {
//   const formControl = input.parentElement;
//   let errorElem = formControl.getElementsByClassName("error")[0];
//   errorElem.style.display = "none";
//   errorElem.innerText = "";
// }

// function checkRequired(inputArr) {
//   inputArr.map((input) => {
//     if (input.value === "") {
//       showError(input, "This field is required");
//     } else {
//       showSuccess(input);
//     }
//   });
// }

// function checkEmail(emailInput) {
//   let regex = /^\S+@\S+\.\S+$/;

//   if (regex.test(emailInput.value)) {
//     showSuccess(emailInput);
//   } else {
//     showError(emailInput, "This is not an email");
//   }
// }

// function isFormValid(inputArr) {
//   let errArr = [];
//   inputArr.map((input) => {
//     let parent = input.parentElement;
//     let errElem = parent.getElementsByClassName("error")[0];

//     if (Boolean(errElem.style.display === "none")) {
//       errArr.push(true);
//     } else {
//       errArr.push(false);
//     }
//   });

//   return !errArr.some((item) => item === false);
// }

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   checkRequired([
//     nameInput,
//     surnameInput,
//     passwordInput,
//     confirmPasswordInput,
//     emailInput,
//   ]);

//   checkEmail(emailInput);

//   if (
//     isFormValid([
//       nameInput,
//       surnameInput,
//       passwordInput,
//       confirmPasswordInput,
//       emailInput,
//     ])
//   ) {
//     console.log([
//       nameInput.value,
//       surnameInput.value,
//       passwordInput.value,
//       confirmPasswordInput.value,
//       emailInput.value,
//     ]);
//   } else {
//     console.log("Error");
//   }
// });

// let x = 2.45683464386743867483678342;

// console.log(Math.round(x));
// console.log(Math.ceil(x));
// console.log(Math.floor(x));
// console.log(Math.pow(x, 5));

// console.log();

// let inpt = document.getElementsByTagName("input")[0];

// let randomNum = (Math.random() * 10 + 1).toFixed(0);

// function guessGame() {
//   if (inpt.value > randomNum) {
//     alert("Try smaller number");
//   } else if (inpt.value < randomNum) {
//     alert("Try higher number");
//   } else {
//     alert("Congratulations!");
//   }
//   inpt.value = "";
// }

// form.addEventListener("submit", guessGame);

// document.querySelector("#form");
