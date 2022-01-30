const audioObj = new Audio("buttonclick.mp3");
const keyboardButtons = document.querySelectorAll(".key");
let keyId;
let pressedKey;
const addClass = (key) => {
  if (key.classList.contains("key-special")) {
    key.classList.add("pressed-special");
  } else {
    key.classList.add("pressed-light");
  }
};
const removeClass = (key) => {
  if (key.classList.contains("key-special")) {
    key.classList.remove("pressed-special");
  } else {
    key.classList.remove("pressed-light");
  }
};
document.addEventListener("keydown", function (e) {
  e.preventDefault();
  keyId = `k${e.keyCode}`.toLowerCase();
  pressedKey = document.getElementById(keyId);
  addClass(pressedKey);
  audioObj.play();
});
document.addEventListener("keyup", function (e) {
  keyId = `k${e.keyCode}`.toLowerCase();
  pressedKey = document.getElementById(keyId);
  removeClass(pressedKey);
});
