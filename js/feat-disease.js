const disCatalog = document.querySelector(".disease-catalog");
let featuredDisease = [];

const getDis = async () => {
  try {
    const response = await fetch("./json/feat-dis.json");
    const data = await response.json();
    featuredDisease = data;

    data.forEach((element) => {
      const dis = document.createElement("div");
      dis.setAttribute("class", "card");

      dis.innerHTML = `
        <div class="dis-box">
            <div class="dis-box-wrap">
              <div class="dis-box-img">
                <img src="${element.urlImg}" alt="${element.alt}" />
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
                      <span>${element.symptoms[4]}</span>
                      <span>${element.symptoms[5]}</span>
                      <span>${element.symptoms[6]}</span>
                      <span>${element.symptoms[7]}</span>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        `;
      disCatalog.appendChild(dis);
    });
  } catch (e) {
    console.log(e);
  }
};
getDis();