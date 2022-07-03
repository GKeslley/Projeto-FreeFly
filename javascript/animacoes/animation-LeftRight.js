export default function animationScrollRightLeft() {
  const directionContentDiv = document.querySelectorAll("[data-direction]");
  const heigthWindow = window.innerHeight * 0.6;

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
}
