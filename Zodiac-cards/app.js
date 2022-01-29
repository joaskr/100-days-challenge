//setting objects
const signs = [
  {
    name: "Aries",
    image: "url('./assets/aries.jpg')",
    date: "March 21 - April 19",
    icon: "https://cdn-icons-png.flaticon.com/512/3184/3184961.png",
  },
  {
    name: "Taurus",
    image: "url('./assets/taurus.jpg')",
    date: "April 20 - May 20",
    icon: "https://cdn-icons-png.flaticon.com/512/3184/3184963.png",
  },
  {
    name: "Gemini",
    image: "url('./assets/gemini.jpg')",
    date: "May 21 - June 20",
    icon: "https://cdn-icons-png.flaticon.com/512/3184/3184954.png",
  },
  {
    name: "Cancer",
    image: "url('./assets/cancer.jpg')",
    date: "June 21 - July 22",
    icon: "https://cdn-icons-png.flaticon.com/512/3184/3184958.png",
  },
  {
    name: "Leo",
    image: "url('./assets/leo.jpg')",
    date: "July 23 - August 22",
    icon: "https://cdn-icons-png.flaticon.com/512/3184/3184968.png",
  },
  {
    name: "Virgo",
    image: "url('./assets/virgo.jpg')",
    date: "August 23 - September 22",
    icon: "https://cdn-icons-png.flaticon.com/512/3184/3184944.png",
  },
  {
    name: "Libra",
    image: "url('./assets/libra.jpg')",
    date: "September 23 - October 22",
    icon: "https://cdn-icons-png.flaticon.com/512/3184/3184965.png",
  },
  {
    name: "Scorpio",
    image: "url('./assets/scorpio.jpg')",
    date: "October 23 - November 21",
    icon: "https://cdn-icons-png.flaticon.com/512/3184/3184964.png",
  },
  {
    name: "Sagittarius",
    image: "url('./assets/sagittarius.jpg')",
    date: "November 22 - December 21",
    icon: "https://cdn-icons-png.flaticon.com/512/3184/3184966.png",
  },
  {
    name: "Capricorn",
    image: "url('./assets/capricorn.jpg')",
    date: "December 22 - January 19",
    icon: "https://cdn-icons-png.flaticon.com/512/3184/3184956.png",
  },
  {
    name: "Aquarius",
    image: "url('./assets/aquarius.jpg')",
    date: "January 20 - February 18",
    icon: "https://cdn-icons-png.flaticon.com/512/3184/3184948.png",
  },
  {
    name: "Pisces",
    image: "url('./assets/pisces.jpg')",
    date: "February 19 - March 20",
    icon: "https://cdn-icons-png.flaticon.com/512/3184/3184967.png",
  },
];

let activeZodiac = 0;

//grabbing html elements
const card = document.querySelector(".card-inner");
const cardFront = document.querySelector(".card-face-front");
const cardHeader = document.querySelector(".card-header-text");
const cardDate = document.querySelector(".card-header-date");
const cardHoroscope = document.querySelector(".card-body-horoscope");
const cardIcon = document.querySelector(".icon");
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".previous");

//fetch horoscope
const fetchHoroscope = (sign) => {
  let URL = `https://aztro.sameerkumar.website/?sign=${signs[sign].name}&day=today`;
  fetch(URL, {
    method: "POST",
  })
    .then((response) => response.json())
    .then((json) => {
      const date = json.current_date;
      const horoscope = json.description;
      cardHoroscope.innerHTML = `Today is: <b>${date}</b> <br/><br/> What's in the <b>stars</b> for you? <br/><br/> ${horoscope}`;
    });
};

//fill card
const fillCardDetails = (activeNumber) => {
  fetchHoroscope(activeNumber);
  cardFront.style.backgroundImage = signs[activeNumber].image;
  cardHeader.innerHTML = signs[activeNumber].name;
  cardDate.innerHTML = signs[activeNumber].date;
  cardIcon.src = signs[activeNumber].icon;
};

//use buttons
nextButton.addEventListener("click", function () {
  if (activeZodiac < 11) {
    activeZodiac++;
    fillCardDetails(activeZodiac);
  } else {
    activeZodiac = 0;
    fillCardDetails(activeZodiac);
  }
});
prevButton.addEventListener("click", function () {
  if (activeZodiac > 0) {
    activeZodiac--;
    fillCardDetails(activeZodiac);
  } else {
    activeZodiac = 11;
    fillCardDetails(activeZodiac);
  }
});

//flip card
card.addEventListener("click", function () {
  card.classList.toggle("flipped");
});

document.addEventListener("DOMContentLoaded", fillCardDetails(activeZodiac));
