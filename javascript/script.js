const animationContent = document.querySelectorAll(".js-content");
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

// Animação
if (window.SimpleAnime) {
  new SimpleAnime();
}
