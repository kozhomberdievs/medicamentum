(function () {
  const searchBlocks = document.querySelectorAll(".search-block");

  if (!searchBlocks.length) return;

  const dataPath = window.location.pathname.includes("/pages/")
    ? "../json/data.json"
    : "./json/data.json";

  let drugs = [];
  const drugsPromise = fetch(dataPath)
    .then(response => response.json())
    .then(data => {
      drugs = data;
      return drugs;
    })
    .catch(error => {
      console.log("Error fetching search data:", error);
      return [];
    });

  const createSearchModal = () => {
    if (document.getElementById("modal")) return;

    const modal = document.createElement("div");
    modal.className = "modal search-modal";
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

  const getModalElements = () => ({
    modal: document.getElementById("modal"),
    content: document.getElementById("modalContent"),
    close: document.getElementById("close"),
    title: document.getElementById("modalTitle"),
    description: document.getElementById("modalDescription"),
    composition: document.getElementById("modalComposition"),
    application: document.getElementById("modalApplication"),
    contraindications: document.getElementById("modalContraindications"),
  });

  const closeModal = () => {
    const { modal } = getModalElements();

    if (!modal) return;

    modal.classList.remove("active");
    document.body.classList.remove("modal-open");
  };

  const openModal = drug => {
    if (!drug) return;

    createSearchModal();

    const elements = getModalElements();

    elements.title.textContent = drug.name;
    elements.description.textContent = drug.description;
    elements.composition.textContent = drug.composition;
    elements.application.textContent = drug.application;
    elements.contraindications.textContent = drug.contraindications;

    elements.modal.classList.add("active");
    document.body.classList.add("modal-open");
  };

  const hideResults = block => {
    block.classList.remove("active-search");
  };

  const renderResults = (block, productsList, foundDrugs) => {
    productsList.innerHTML = "";

    if (!foundDrugs.length) {
      hideResults(block);
      return;
    }

    foundDrugs.slice(0, 8).forEach(drug => {
      const item = document.createElement("li");
      const button = document.createElement("button");

      button.className = "search-result";
      button.type = "button";
      button.dataset.id = drug.id;
      button.textContent = drug.name;

      item.appendChild(button);
      productsList.appendChild(item);
    });

    block.classList.add("active-search");
  };

  searchBlocks.forEach(block => {
    const searchInput = block.querySelector(".search");
    const productsList = block.querySelector(".search-products");

    if (!searchInput || !productsList) return;

    searchInput.addEventListener("input", async () => {
      const input = searchInput.value.trim().toLowerCase();

      if (!drugs.length) {
        await drugsPromise;
      }

      if (!input) {
        productsList.innerHTML = "";
        hideResults(block);
        return;
      }

      const foundDrugs = drugs.filter(drug =>
        drug.name.toLowerCase().includes(input)
      );

      renderResults(block, productsList, foundDrugs);
    });

    productsList.addEventListener("click", async event => {
      const button = event.target.closest(".search-result");

      if (!button) return;

      event.stopPropagation();

      if (!drugs.length) {
        await drugsPromise;
      }

      const drugId = Number(button.dataset.id);
      const drug = drugs.find(item => item.id === drugId);

      searchInput.value = drug ? drug.name : searchInput.value;
      productsList.innerHTML = "";
      hideResults(block);
      openModal(drug);
    });
  });

  document.addEventListener("click", event => {
    searchBlocks.forEach(block => {
      if (!block.contains(event.target)) {
        hideResults(block);
      }
    });

    const { modal } = getModalElements();

    if (modal && modal.classList.contains("active") && event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("click", event => {
    if (event.target.closest("#close")) {
      closeModal();
    }
  });

  document.addEventListener("keydown", event => {
    if (event.key !== "Escape") return;

    searchBlocks.forEach(hideResults);
    closeModal();
  });
})();
