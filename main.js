// function asyncTest() {
//   let users = [];

//   setTimeout(() => {
//     users.push({ name: "john" });
//   }, 0);

//   return users;
// }

// function findSpecUser(username) {
//   let user = asyncTest().find((user) => user.name === username);

//   console.log(user);
// }

// findSpecUser("john");

// let promise = new Promise((resolve, reject) => {
//   if (true) {
//     resolve({ name: "hello" });
//   } else {
//     reject(console.log("errorrrr"));
//   }
// });

// promise
//   .then((res) => {
//     console.log(res);
//   })
//   .then((data) => {
//     console.log("hello2");
//   })
//   .catch((err) => {
//     console.log(err, "error123");
//   })
//   .finally(() => {
//     console.log("Finished");
//   });

// async function test() {
//   try {
//     throw new Error();
//   } catch {
//     console.log("error");
//     throw new Error("Some error 123");
//   } finally {
//     console.log("final");
//   }
// }

// test();

// async function getDatas() {
//   let data = await fetch("https://jsonplaceholder.typicode.com/posts");

//   return data.json();
// }

// getDatas().then((data) => console.log(data));

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   body: { name: hello },
// });

// let body = document.body;

// async function fetchData(url) {
//   try {
//     body.innerText = "Loading...";
//     const response = await fetch(url);

//     if (!response.ok) {
//       throw new Error("Something bad happened!");
//     } else {
//       const data = await response.json();
//       body.innerText = "";
//       return data;
//     }
//   } catch (error) {
//     console.log("ERROR:", error);
//   }
// }

// fetchData("https://jsonplaceholder.typicode.com/posts").then((data) => {
//   let ul = document.createElement("ul");

//   data.map((item) => {
//     let li = document.createElement("li");

//     li.innerText = item.title;

//     ul.appendChild(li);
//   });

//   body.appendChild(ul);
// });

let textInput = document.getElementById("text");
let fileInput = document.getElementById("file");
let form = document.getElementsByTagName("form")[0];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let textVal = textInput.value;
  let fileVal = fileInput;

  let formData = new FormData();

  formData.append("file", fileVal.files[0]);
  formData.append("text", textVal);

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: formData,
  });
});
