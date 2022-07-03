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

const button = document.querySelector('[data-button="button"]');
const list = document.querySelector('[data-list="list"]');

function clickButton() {
  list.classList.add("activeList");
  button.classList.add("activeList");

  outsideClick(list, () => {
    list.classList.remove("activeList");
    button.classList.remove("activeList");
  });
}

function outsideClick(element, callback) {
  const html = document.documentElement;
  const outside = "data-outside";

  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      html.removeEventListener("click", handleOutsideClick);
      element.removeAttribute(outside, "");
      callback();
    }
  }

  if (!element.hasAttribute(outside)) {
    setTimeout(() => {
      html.addEventListener("click", handleOutsideClick);
    });
    element.setAttribute(outside, "");
  }
}

button.addEventListener("click", clickButton);

if (window.location.href.includes("agenda.html")) {
  const buttonAgenda = document.querySelector("[data-agenda-button]");

  function clickAgenda(event) {
    event.preventDefault();
    buttonAgenda.innerText = "Enviando";
    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        buttonAgenda.innerText = "Enviar";
        const feedback = document.querySelector("[data-feedback]");
        feedback.classList.add("ativo");
        feedback.innerText = "Mensagem enviada com sucesso";
      }, 1000 * 2);
    }
  }

  buttonAgenda.addEventListener("click", clickAgenda);
}
