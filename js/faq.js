const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const currentAnswer = question.nextElementSibling;
    
    const currentArrow = question.querySelector(".arrow");

    const answers = document.querySelectorAll(".answer");
    const arrows = document.querySelectorAll(".arrow");

    answers.forEach((item, index) => {
      if (item !== currentAnswer) {
        item.style.maxHeight = null;
        if (arrows[index]) {
          arrows[index].classList.remove("rotate");
        }
      }
    });

    if (currentAnswer.style.maxHeight) {
      currentAnswer.style.maxHeight = null;
      if (currentArrow) currentArrow.classList.remove("rotate");
    } else {
      currentAnswer.style.maxHeight = currentAnswer.scrollHeight + "px";
      if (currentArrow) currentArrow.classList.add("rotate");
    }
  });
});