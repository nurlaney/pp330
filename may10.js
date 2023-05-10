// let rightWrapper = document.getElementById("right-part");
// let btn = document.getElementById("submit-btn");
// let productForm = document.getElementById("product-form");

// function handleDisplayProduct(e) {
//   let nameVal = document.getElementById("name").value;
//   let yearVal = document.getElementById("year").value;
//   let countVal = document.getElementById("count").value;
//   let descVal = document.getElementById("desc").value;

//   let productWrapper = document.createElement("div");
//   productWrapper.setAttribute("class", "product-wrapper");

//   let innerElems = `
//           <div class="heading">
//             <h4>${nameVal}</h4>
//             <span>${countVal}</span>
//           </div>
//           <p>${yearVal}</p>
//           <p>
//             ${descVal}
//           </p>
//   `;

//   productWrapper.innerHTML = innerElems;

//   rightWrapper.appendChild(productWrapper);
//   productForm.reset();
//   e.preventDefault();
// }

// function handleChange() {
//   window.alert("Hovered!");
// }

// productForm.addEventListener("submit", handleDisplayProduct);

// function greetings() {
//   alert("Hello World!");
// }

// let sidebar = document.getElementsByClassName("sidebar")[0];
// let btn = document.getElementById("openMenu");
// let closebtn = document.getElementById("closeBtn");

// function handleOpenSidebar() {
//   sidebar.classList.add("active");
//   btn.style.display = "none";
// }

// function handleHideSidebar() {
//   sidebar.classList.remove("active");
//   btn.style.display = "block";
// }

// function wrapFunction() {
//   if (sidebar.classList.contains("active")) {
//     sidebar.classList.remove("active");
//   } else {
//     sidebar.classList.add("active");
//   }
// }

// btn.addEventListener("click", handleOpenSidebar);

// closebtn.addEventListener("click", handleHideSidebar);

// console.log(document.getElementsByTagName("button"));
