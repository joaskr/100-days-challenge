const trickyButton = document.querySelector(".not-active");
const activeButton = document.querySelector(".active");
const buttonContainer = document.getElementById("btn-container");
const imageDisplay = document.querySelector(".show");
const closeButton = document.querySelector(".close-btn");
const overlay = document.querySelector(".overlay");
buttonContainer.style.flexDirection = "row";

const changeDirection = () => {
  let direction = buttonContainer.style.flexDirection;
  if (direction === "row") {
    buttonContainer.style.flexDirection = "row-reverse";
  } else {
    buttonContainer.style.flexDirection = "row";
  }
};

const showImage = () => {
  imageDisplay.style.display = "block";
};

const closeImage = () => {
  imageDisplay.style.display = "none";
};

trickyButton.addEventListener("mouseover", changeDirection);
activeButton.addEventListener("click", showImage);
closeButton.addEventListener("click", closeImage);
overlay.addEventListener("click", closeImage);
