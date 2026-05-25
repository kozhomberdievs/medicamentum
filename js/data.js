const catalog = document.querySelector(".catalog");

fetch("../json/data.json")
  .then(response => response.json())
  .then(data => {
    data.forEach(element => {
      const drug = document.createElement("div");
      drug.setAttribute("class", "card");
      // const {name, composition, application, buy, label, price, about, url} = data
    
      drug.innerHTML = `
      <article class="drug">
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
      <div class="drug-price">
       <span class="price-label">${element.label}</span>
        <span class="price-value">${element.price}</span>
        </div>
        <div class="drug-actions">
        <button type="button">
        <a href="">${element.about}</a>
        </button>
        </div>
      </article>
      `;
      catalog.appendChild(drug);
    });
  })
