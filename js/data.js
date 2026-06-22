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
      <img class="drug-img" src="${element.url}" alt="${element.name}"/>
      </div>
       <h3 class="drug-title">${element.name}</h3>
       <p class="drug-des">${element.description}</p>
       <ul class="drug-info">
       <li>Состав</li>
       <li>Применение</li>
       <li>Противопоказания</li>
       </ul>
      <div class="drug-price">
       <span class="price-label">${element.label}</span>
        <span class="price-value">${element.price}</span>
        </div>
        <div class="drug-actions">
        <button class="details-btn" type="button" data-id="${element.id}">
        ${element.about}
        </button>
        </div>
      </article>
      `;
      catalog.appendChild(drug);
    });
  })
