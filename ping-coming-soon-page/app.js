const input = document.getElementById("input");
const notifyBtn = document.querySelector(".notify-btn");
const errorString = document.querySelector(".error-string");

notifyBtn.addEventListener("click", function (event) {
  event.preventDefault();
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value)) {
    return true;
  } else {
    input.classList.add("wrong");
    errorString.classList.toggle("invisible");
    setTimeout(function () {
      errorString.classList.toggle("invisible");
      input.classList.remove("wrong");
      input.value = "";
    }, 5000);
  }
});
