
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const closeButton = document.getElementById("close");
const modalCatalog = document.querySelector(".catalog");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalComposition = document.getElementById("modalComposition");
const modalApplication = document.getElementById("modalApplication");
const modalContraindications = document.getElementById("modalContraindications");

let drugs = [];

const getData = async () => {
  try {
    const response = await fetch("../json/data.json");
    drugs = await response.json();
    return drugs;
  } catch (error) {
    console.log("Error fetching data:", error);
    return [];
  }
};

const openModal = drug => {
  if (!drug) return;

  modalTitle.textContent = drug.name;
  modalDescription.textContent = drug.description;
  modalComposition.textContent = drug.composition;
  modalApplication.textContent = drug.application;
  modalContraindications.textContent = drug.contraindications;

  modal.classList.add("active");
  document.body.classList.add("modal-open");
};

const closeModal = () => {
  modal.classList.remove("active");
  document.body.classList.remove("modal-open");
};

const drugsPromise = getData();

modalCatalog.addEventListener("click", async event => {
  const button = event.target.closest(".details-btn");

  if (!button) return;

  if (!drugs.length) {
    await drugsPromise;
  }

  const drugId = Number(button.dataset.id);
  const drug = drugs.find(item => item.id === drugId);
  openModal(drug);
});

closeButton.addEventListener("click", closeModal);

modal.addEventListener("click", event => {
  if (!modalContent.contains(event.target)) {
    closeModal();
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && modal.classList.contains("active")) {
    closeModal();
  }
});
