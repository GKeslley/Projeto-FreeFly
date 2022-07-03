export default function submitButton() {
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
}
