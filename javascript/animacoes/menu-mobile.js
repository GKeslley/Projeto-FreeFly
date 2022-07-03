export default function menuMobile() {
  const button = document.querySelector('[data-button="button"]');
  const list = document.querySelector('[data-list="list"]');

  if (button && list) {
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
  }
}
