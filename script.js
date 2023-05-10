let elem = document.getElementById("item");
let buttonElem = document.getElementsByTagName("button")[0];
// let inputelem = document.getElementsByName("something");
// let exampleElems = document.getElementsByClassName("item1");

// let myCondition = true;

// buttonElem.addEventListener("click", () => {
//   // elem.classList.toggle('show')
//   if (myCondition) {
//     elem.style.display = "block";
//   } else {
//     elem.style.display = "none";
//   }
// });

// function callbackFn() {
//   alert("KEY PRESSED!");
// }

// buttonElem.addEventListener("mouseenter", callbackFn);

// function handleShowHide() {
//   if (myCondition) {
//     elem.classList.add("show");
//   } else {
//     elem.classList.add("hide");
//   }
// }

// document.addEventListener("click", callbackFn);

// let car = {
//   name: "Audi",
//   year: "2022",
//   maxSpeed: 300,
//   count: 2,
//   about: "lorem ipsum ds fnk nfsdn kndsaf",
// };

class Car {
  constructor(name, year, maxSpeed, count, about) {
    this.name = name;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.count = count;
    this.about = about;
  }
}

class UiMethods {
  static appendElem(param) {
    let newElem = document.createElement("div");
    newElem.setAttribute("class", "product-card");
    newElem.innerHTML = param;
    elem.appendChild(newElem);
  }
}

// function handleAppendChild() {
//   let childWrap = `
//   <div class="product-card">
//       <div class="heading">
//         <h1>${car.name}</h1>
//         <span>${car.count}</span>
//       </div>
//       <div class="list">
//         <b>${car.year}</b>
//       </div>
//     </div>
//   `;

//   let parentElem = document.createElement("div");
//   let headingElem = document.createElement("div");
//   let h1 = document.createElement("h1");
//   let span = document.createElement("span");
//   let listElem = document.createElement("div");
//   let yearElem = document.createElement("b");

//   h1.innerText = car.name;
//   span.innerText = car.count;
//   yearElem.innerText = car.year;

//   parentElem.setAttribute("class", "product-card");
//   headingElem.setAttribute("class", "heading");
//   listElem.setAttribute("class", "list");

//   headingElem.appendChild(h1);
//   headingElem.appendChild(span);

//   listElem.appendChild(yearElem);

//   parentElem.appendChild(headingElem);
//   parentElem.appendChild(listElem);

//   // elem.appendChild(parentElem);

//   elem.innerHTML = childWrap;
//   // console.log(typeof childWrap);
// }

let audi = new Car("audi", 1992, 300, 2, "bla bla bla");
let bmw = new Car("bmw", 2000, 300, 2, "bla bla bla");

let childWrap = `
      <div class="heading">
        <h1>${audi.name}</h1>
        <span>${audi.count}</span>
      </div>
      <div class="list">
        <b>${audi.year}</b>
      </div>
  `;

buttonElem.addEventListener("click", () => UiMethods.appendElem(childWrap));
