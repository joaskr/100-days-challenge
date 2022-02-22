const toggleBtn = document.getElementById("toggle-password");
const body = document.getElementById("body");
const main = document.getElementById("main");
const icon = document.querySelector(".fa");
const showPassword = () => {
  const passwordInput = document.getElementById("password");
  passwordInput.type === "password"
    ? (passwordInput.type = "text")
    : (passwordInput.type = "password");
  body.classList.toggle("dark");
  main.classList.toggle("dark");
  passwordInput.classList.toggle("dark");
  icon.classList.toggle("fa-eye");
  icon.classList.toggle("fa-eye-slash");
};
toggleBtn.addEventListener("click", showPassword);
