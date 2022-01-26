const url = "https://one-direction-api.herokuapp.com/randomlyrics";
const quoteText = document.getElementById("lyrics");
const guessInput = document.getElementById("guessInput");
const checkButton = document.querySelector(".check");
const hintButton = document.querySelector(".hint");
const giveUpButton = document.querySelector(".give-up");
const resultString = document.querySelector(".resultString");
const gameButtons = document.querySelectorAll(".game-btn");
const resetButton = document.querySelector(".reset");

const dataObject = { title: "", guess: "", hint: "" };

const fetchData = () => {
  return new Promise((resolve, reject) =>
    fetch(url)
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch((err) => reject(err))
  );
};

async function getData() {
  const data = await fetchData();
  let quote = data.quote;
  let album = data.album;
  quoteText.innerHTML = quote;
  let song = data.song.toLowerCase();
  dataObject.title = song;
  dataObject.hint = album;
}

const getInputValue = () => {
  let inputValue = guessInput.value;
  inputValue = inputValue.toString().toLowerCase();
  dataObject.guess = inputValue;
  checkTitle();
};

const changeButtons = () => {
  gameButtons.forEach((button) => button.classList.toggle("hidden"));
  resetButton.classList.toggle("hidden");
};

const checkTitle = () => {
  if (dataObject.title === dataObject.guess) {
    resultString.innerHTML = "Success!";
    guessInput.classList.add("success");
    changeButtons();
  } else {
    resultString.innerHTML = "Try again...";
    guessInput.value = "";
    dataObject.guess = "";
  }
};

const showHint = () => {
  resultString.innerHTML = `Album: ${dataObject.hint}`;
};

const giveUp = () => {
  resultString.innerHTML = `You gave up -_- <br> It's ${dataObject.title.toUpperCase()}`;
  guessInput.value = dataObject.title;
  changeButtons();
};

const reset = () => {
  guessInput.value = "";
  dataObject.guess = "";
  resultString.innerHTML = "";
  guessInput.classList.remove("success");
  changeButtons();
  getData();
};

checkButton.addEventListener("click", getInputValue);
hintButton.addEventListener("click", showHint);
giveUpButton.addEventListener("click", giveUp);
resetButton.addEventListener("click", reset);

document.addEventListener("DOMContentLoaded", getData(), false);
