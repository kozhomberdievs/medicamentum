const catalog = document.querySelector(".catalog");

const getData = async () => {
  try {
    const response = await fetch("../json/featured-drug.json");
    const data = await response.json();

    data.forEach((element) => {
      const drug = document.createElement("div");
      drug.setAttribute("class", "card");

      drug.innerHTML = `
        <div class="drug">
        <div class="drug-img">
        <img class="drug-img" src="${element.url}" alt"#"/>
        </div>
         <h3 class="drug-title">${element.name}</h3>
         <p class="drug-des">${element.description}</p>
         <ul class="drug-info">
         <li><a href="">${element.composition}</a></li>
         <li><a href="">${element.application}</a></li>
         <li><a href="">${element.buy}</a></li>
         </ul>
          <div class="drug-actions">
          <button type="button" class="actions-btn">
          <a href="">${element.about}</a>
          </button>
          </div>
        </div>
        `;
      catalog.appendChild(drug);
    });
  } catch (e) {
    console.log(e);
  }
};
getData()
