const clockNumbers = document.getElementById("clock");
const greetingText = document.getElementById("greetings");
const greetingIcon = document.querySelector(".greeting-icon");
const musicBtn = document.querySelector(".music-chbx");
const music = document.querySelector(".music");
const waterBtn = document.querySelector(".water-chbx");
const water = document.querySelector(".water");
const birdsBtn = document.querySelector(".birds-chbx");
const birds = document.querySelector(".birds");

var scene = document.getElementById("scene");
var parallaxInstance = new Parallax(scene, {
  relativeInput: true,
  scalarY: 0, //blocks up and down movement
});

const getTime = () => {
  setInterval(() => {
    //getting time
    const currentTime = new Date();
    let currentHour = currentTime.getHours();
    let currentMinute = currentTime.getMinutes();
    let currentSecond = currentTime.getSeconds();
    currentHour = (currentHour < 10 ? "0" : "") + currentHour;
    currentMinute = (currentMinute < 10 ? "0" : "") + currentMinute;
    currentSecond = (currentSecond < 10 ? "0" : "") + currentSecond;
    const currentTimeText = `${currentHour}:${currentMinute}:${currentSecond}`;
    clockNumbers.innerHTML = currentTimeText;
    //check if you should say morning/afternoon/evening
    if (currentHour === 24) {
      greeting = "good morning";
      greetingText.innerHTML = greeting;
      greetingIcon.classList.add("fa-coffee");
    } else if (currentHour >= 1 && currentHour < 13) {
      greeting = "good morning";
      greetingText.innerHTML = greeting;
      greetingIcon.classList.add("fa-coffee");
    } else if (currentHour >= 13 && currentHour < 17) {
      greeting = "good afternoon";
      greetingText.innerHTML = greeting;
      greetingIcon.classList.add("fa-sun");
    } else {
      greeting = "good evening";
      greetingText.innerHTML = greeting;
      greetingIcon.classList.add("fa-moon");
    }
  }, 1000);
};

musicBtn.addEventListener("change", function () {
  music.paused ? music.play() : music_stop(music);
  music.volume = 0.1;
});
waterBtn.addEventListener("change", function () {
  water.paused ? water.play() : music_stop(water);
  water.volume = 0.1;
});
birdsBtn.addEventListener("change", function () {
  birds.paused ? birds.play() : music_stop(birds);
  birds.volume = 0.1;
});
function music_stop(audio) {
  audio.pause();
  audio.currentTime = 0;
}

document.addEventListener('"DOMContentLoaded"', getTime());
