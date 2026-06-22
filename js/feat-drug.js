const catalog = document.querySelector(".catalog");
let featuredDrugs = [];

const getData = async () => {
  try {
    const response = await fetch("./json/featured-drug.json");
    const data = await response.json();
    featuredDrugs = data;

    data.forEach((element) => {
      const drug = document.createElement("div");
      drug.setAttribute("class", "card");

      drug.innerHTML = `
        <div class="drug">
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
          <div class="drug-actions">
          <button type="button" class="actions-btn" data-featured-id="${element.id}">
          ${element.about}
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
const createFeaturedModal = () => {
  if (document.getElementById("modal")) return;

  const modal = document.createElement("div");
  modal.className = "modal";
  modal.id = "modal";
  modal.innerHTML = `
    <div class="modal-content" id="modalContent">
      <button class="close" id="close" type="button" aria-label="Закрыть">&times;</button>
      <h2 id="modalTitle"></h2>
      <p id="modalDescription"></p>
      <div class="modal-info">
        <p><strong>Состав:</strong> <span id="modalComposition"></span></p>
      </div>
      <div class="modal-info">
        <p><strong>Применение:</strong> <span id="modalApplication"></span></p>
      </div>
      <div class="modal-info">
        <p><strong>Противопоказание:</strong> <span id="modalContraindications"></span></p>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
};

const openFeaturedModal = drug => {
  if (!drug) return;

  createFeaturedModal();

  document.getElementById("modalTitle").textContent = drug.name;
  document.getElementById("modalDescription").textContent = drug.description;
  document.getElementById("modalComposition").textContent = drug.composition;
  document.getElementById("modalApplication").textContent = drug.application;
  document.getElementById("modalContraindications").textContent = drug.contraindications;

  document.getElementById("modal").classList.add("active");
  document.body.classList.add("modal-open");
};

const closeFeaturedModal = () => {
  const modal = document.getElementById("modal");

  if (!modal) return;

  modal.classList.remove("active");
  document.body.classList.remove("modal-open");
};

catalog.addEventListener("click", event => {
  const button = event.target.closest("[data-featured-id]");

  if (!button) return;

  const drugId = Number(button.dataset.featuredId);
  const drug = featuredDrugs.find(item => item.id === drugId);
  openFeaturedModal(drug);
});

document.addEventListener("click", event => {
  const modal = document.getElementById("modal");

  if (event.target.closest("#close")) {
    closeFeaturedModal();
  }

  if (modal && modal.classList.contains("active") && event.target === modal) {
    closeFeaturedModal();
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeFeaturedModal();
  }
});

getData();
