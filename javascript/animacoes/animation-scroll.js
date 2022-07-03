export default function animationScroll() {
  const animationContent = document.querySelectorAll(
    "[data-content='content']"
  );
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
}
