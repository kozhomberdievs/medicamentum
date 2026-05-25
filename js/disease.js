const mainBlock = document.querySelector(".disease-block");

const getData = async () => {
  try {
    const response = await fetch("../json/diseases.json");
    return await response.json();
  } catch (e) {
    console.log("Ошибка при загрузке данных:", e);
  }
};

const todo = async () => {
  const data = await getData();

  if (!data || !Array.isArray(data)) return;

  data.forEach((element) => {
    const card = document.createElement("div");
    card.setAttribute("class", "card");

    card.innerHTML = `
    <div class="dis-box">
            <div class="dis-box-wrap">
              <div class="dis-box-img">
                <img src="${element.urlImg}" alt="#" />
              </div>
              <div class="dis-box-block">
                <div class="title">
                  <span>${element.type}</span>
                  <h2>${element.name}</h2>
                </div>
                <div class="info">
                  <p>
                    ${element.purpose}
                  </p>
                </div>
                <div class="symptoms-block">
                  <div class="symptoms-wrap">
                    <p>Основные симптомы: </p>
                    <div class="symptoms-dis">
                      <span>${element.symptoms[1]}</span>
                      <span>${element.symptoms[2]}</span>
                      <span>${element.symptoms[3]}</span>
                      <span>+еще</span>
                    </div>
                  </div>
                  <button><a href="${element.urlBtn}">Подробнее <i class="fa-solid fa-arrow-right"></i></a></button>
                </div>
              </div>
            </div>
          </div>
    `;
    mainBlock.appendChild(card);
  });
};
todo();
