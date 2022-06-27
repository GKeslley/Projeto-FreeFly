// Animação Introdução
if (window.SimpleAnime) {
  new SimpleAnime();
}

const animationContent = document.querySelectorAll("[data-content='content']");
const heigthWindow = window.innerHeight * 0.6;

function animation() {
  animationContent.forEach((item) => {
    const topItem = item.getBoundingClientRect().top - heigthWindow;
    if (topItem < 0) {
      item.classList.add("ativo");
    }
  });
}

window.addEventListener("scroll", animation);

const directionContentDiv = document.querySelectorAll("[data-direction]");

function animationDirection() {
  directionContentDiv.forEach((item) => {
    const setItem = item.dataset.direction;
    const itemTop = item.getBoundingClientRect().top - heigthWindow;
    if (itemTop < 0) {
      item.classList.add(setItem);
    }
  });
}

window.addEventListener("scroll", animationDirection);
