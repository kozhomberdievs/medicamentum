const medicines = {
  paracetamol: {
    name: "Парацетамол",
    dose: "500 мг · Таблетки",
    iconBg: "#E6F1FB",
    iconColor: "#185FA5",
    indications:
      "Головная боль, зубная боль, повышенная температура, болевой синдром средней и слабой интенсивности.",
    usage:
      "Взрослым по 1–2 таблетки 3–4 раза в сутки с интервалом не менее 4 часов. Максимум 4 г/сут.",
    contraindications:
      "Нарушения функции печени и почек, повышенная чувствительность к парацетамолу.",
    sideeffects:
      "Редко — аллергические реакции, нарушения функции печени при превышении дозы.",
  },
  ibuprofen: {
    name: "Ибупрофен",
    dose: "400 мг · Таблетки",
    iconBg: "#E1F5EE",
    iconColor: "#0F6E56",
    indications:
      "Воспаления, боль различного происхождения, лихорадка, артрит, миалгия.",
    usage:
      "По 400 мг 3 раза в сутки во время или после еды. Максимум 1200 мг/сут (безрецептурно).",
    contraindications:
      "Язвенная болезнь, нарушения свёртываемости крови, III триместр беременности, тяжёлая почечная или печёночная недостаточность.",
    sideeffects:
      "Боль в животе, тошнота, диспепсия. Реже — желудочно-кишечные кровотечения, повышение АД.",
  },
  amoxicillin: {
    name: "Амоксициллин",
    dose: "250 мг · Капсулы",
    iconBg: "#FAEEDA",
    iconColor: "#854F0B",
    indications:
      "Инфекции дыхательных путей, мочевыводящих путей, кожи и мягких тканей, ЛОР-органов.",
    usage:
      "По 250–500 мг каждые 8 часов, курс 5–10 дней. Принимать независимо от еды.",
    contraindications:
      "Аллергия на пенициллины и цефалоспорины, инфекционный мононуклеоз.",
    sideeffects:
      "Диарея, тошнота, кожная сыпь, крапивница. Редко — анафилаксия.",
  },
};

// Открыть модалку по ID лекарства
function openModal(id) {
  const med = medicines[id];
  if (!med) return;

  // Подставляем данные в элементы
  document.getElementById("modal-name").textContent = med.name;
  document.getElementById("modal-dose").textContent = med.dose;
  document.getElementById("modal-indications").textContent = med.indications;
  document.getElementById("modal-usage").textContent = med.usage;
  document.getElementById("modal-contraindications").textContent =
    med.contraindications;
  document.getElementById("modal-sideeffects").textContent = med.sideeffects;

  // Меняем иконку и цвет
  const icon = document.getElementById("modal-icon");
  icon.style.background = med.iconBg;
  icon.innerHTML = `<i class="ti ti-pill" style="font-size:20px; color:${med.iconColor};"></i>`;

  // Показываем модалку
  document.getElementById("modal-overlay").classList.add("active");
}

// Закрыть модалку
function closeModal() {
  document.getElementById("modal-overlay").classList.remove("active");
}

// Закрыть при клике на фон
function handleOverlayClick(e) {
  if (e.target === document.getElementById("modal-overlay")) {
    closeModal();
  }
}

// Закрыть по Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});
