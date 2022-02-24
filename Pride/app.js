const buttons = document.querySelectorAll(".button");
const header = document.querySelector("#header");
const removeClass = () => {
  buttons.forEach((button) => button.classList.remove("active"));
};
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    removeClass();
    button.classList.add("active");
    header.removeAttribute("class");
    header.classList.add(button.innerHTML.toLowerCase());
  });
});
