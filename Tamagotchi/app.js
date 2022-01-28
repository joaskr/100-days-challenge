//grabbing elements
const startScreen = document.querySelector(".start-screen");
const gameScreen = document.querySelector(".game-screen");
const startButton = document.getElementById("egg-btn");
const nameInput = document.getElementById("name-input");
const inputValidator = document.querySelector(".input-validation");
const chicken = document.getElementById("chicken");
const foodBar = document.getElementById("hunger");
const funBar = document.getElementById("fun");
const energyBar = document.getElementById("energy");
const feedBtn = document.querySelector(".feed-btn");
const playBtn = document.querySelector(".play-btn");
const sleepBtn = document.querySelector(".sleep-btn");

//variables
let chickenName;
let gameActive = false;
let food = 100;
let fun = 100;
let energy = 100;
let chickenStyleValue = Math.floor(Math.random() * (2 - 0) + 0);

setStats = () => {
  foodBar.value = food;
  document.querySelector(".hunger-display").innerHTML = `${food}%`;
  funBar.value = fun;
  document.querySelector(".fun-display").innerHTML = `${fun}%`;
  energyBar.value = energy;
  document.querySelector(".energy-display").innerHTML = `${energy}%`;
};

//functions
const getName = () => {
  chickenName = nameInput.value.toString();
  if (chickenName === "") {
    nameInput.classList.add("error");
    inputValidator.innerHTML = "Your chicken must have a name!";
    setTimeout(function () {
      nameInput.classList.remove("error");
      inputValidator.innerHTML = "";
    }, 5000);
    return false;
  } else {
    return chickenName;
  }
};

const showChicken = (name, chickenStyle) => {
  gameActive = true;
  startScreen.style.display = "none";
  gameScreen.classList.toggle("invisible");
  document.querySelector(".chicken-name").innerHTML = name;
  chicken.style.display = "block";
  if (chickenStyle === 0) {
    chicken.src = "./assets/Chicken_Strut.gif";
  } else {
    chicken.src = "./assets/Chicken_Strut_Light_Brown.gif";
  }
  setStats();
};
const reset = () => {
  gameActive = false;
  food = 100;
  fun = 100;
  energy = 100;
  chickenName = "";
  startScreen.style.display = "flex";
  gameScreen.classList.toggle("invisible");
};
const chickenLive = () => {
  setInterval(function () {
    food = food - 1;
    setStats(food);
    if (food < 0) {
      chicken.style.display = "none";
      alert("You died.");
      reset();
    }
  }, 5000);
  setInterval(function () {
    fun = fun - 1;
    setStats(fun);
  }, 2000);
  setInterval(function () {
    energy = energy - 1;
    setStats(energy);
  }, 10000);
};

const eat = (chickenStyle) => {
  if (chickenStyle === 0) {
    chicken.src = "./assets/Chicken_Feed.gif";
  } else {
    chicken.src = "./assets/Chicken_Feed_Light_Brown.gif";
  }
  chicken.classList.remove("moving");
  setTimeout(() => {
    if (chickenStyle === 0) {
      chicken.src = "./assets/Chicken_Strut.gif";
    } else {
      chicken.src = "./assets/Chicken_Strut_Light_Brown.gif";
    }
    chicken.classList.add("moving");
  }, 5000);
  food = 100;
  setStats(food);
};
const play = (chickenStyle) => {
  chicken.classList.remove("moving");
  chicken.classList.add("running");
  if (chickenStyle === 0) {
    chicken.src = "./assets/Chicken_Run.gif";
  } else {
    chicken.src = "./assets/Chicken_Run_Light_Brown.gif";
  }
  setTimeout(() => {
    if (chickenStyle === 0) {
      chicken.src = "./assets/Chicken_Strut.gif";
    } else {
      chicken.src = "./assets/Chicken_Strut_Light_Brown.gif";
    }
    chicken.classList.add("moving");
    chicken.classList.remove("running");
  }, 5000);
  fun = 100;
  setStats(fun);
};
const sleep = (chickenStyle) => {
  chicken.classList.remove("moving");
  if (chickenStyle === 0) {
    chicken.src = "./assets/Chicken_Rest.gif";
  } else {
    chicken.src = "./assets/Chicken_Rest_Light_Brown.gif";
  }
  setTimeout(() => {
    if (chickenStyle === 0) {
      chicken.src = "./assets/Chicken_Strut.gif";
    } else {
      chicken.src = "./assets/Chicken_Strut_Light_Brown.gif";
    }
    chicken.classList.add("moving");
  }, 5000);
  energy = 100;
  setStats(energy);
};
const startGame = () => {
  getName();
  if (getName() == false) {
    return;
  } else {
    showChicken(chickenName, chickenStyleValue);
    chickenLive();
  }
};
startButton.addEventListener("click", startGame);
feedBtn.addEventListener("click", eat);
playBtn.addEventListener("click", play);
sleepBtn.addEventListener("click", sleep);
