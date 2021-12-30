const cardLink = document.querySelector(".card__link:last-child");
const box = document.querySelector(".box");

cardLink.addEventListener("focus", () => {
  box.classList.remove("box--hide");
});

// preventing blur behavior
box.addEventListener("mousedown", (e) => {
  e.preventDefault();
});

cardLink.addEventListener("blur", () => {
  box.classList.add("box--hide");
});