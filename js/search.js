// const searchInput = document.querySelector(".search");
// const productsList = document.getElementById("products");
// const searchBody = document.querySelector("search-block");

// const products = [
//   {
//     name: "Лоратал",
//     url: "какая то ссылка на страницу жтого лекарства",
//   },
//   {
//     name: "Ибупрофен",
//     url: "какая то ссылка на страницу жтого лекарства",
//   },
//   {
//     name: "Амоксациллин",
//     url: "какая то ссылка на страницу жтого лекарства",
//   },
//   {
//     name: "Тайлол-Хот",
//     url: "какая то ссылка на страницу жтого лекарства",
//   },
//   {
//     name: "Мезим",
//     url: "какая то ссылка на страницу жтого лекарства",
//   },
//   {
//     name: "Но-Шпа",
//     url: "какая то ссылка на страницу жтого лекарства",
//   },
// ];

// searchInput.oninput = () => {
//   const input = searchInput.value.toLowerCase();
//   productsList.innerHTML = "";

//   const filteredProducts = products.filter((item) =>
//     item.name.toLowerCase().includes(input)
//   );

//   filteredProducts.forEach((product) => {
//     const li = document.createElement("li");
//     const link = document.createElement("a");

//     link.textContent = product.name;
//     link.href = product.url;
//     link.target = "_blank";

//     li.appendChild(link);
//     productsList.appendChild(li);
//   });

//   if (input !== "" && filteredProducts.length > 0) {
//     searchBody.classList.add("active-search");
//   } else {
//     searchBody.classList.remove("active-search");
//   }
// };

// document.onclick = (event) => {
//   if (
//     !searchInput.contains(event.target) &&
//     !productsList.contains(event.target)
//   ) {
//     searchBody.classList.remove("active-search");
//   }
// };
