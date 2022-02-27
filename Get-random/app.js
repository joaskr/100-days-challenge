const textarea = document.getElementById("input-field");
const tagsContainer = document.querySelector(".tags");

textarea.focus();

textarea.addEventListener("keyup", (element) => {
  createTags(element.target.value);
  if (element.key === "Enter") {
    element.target.value = "";
    selectRandom();
  }
});

const createTags = (elementValue) => {
  const tags = elementValue
    .split(",")
    .map((tag) => tag.trim())
    .filter((tag) => {
      return tag !== "";
    });

  tagsContainer.innerHTML = "";

  tags.forEach((tag) => {
    const tagSpan = document.createElement("span");
    tagSpan.classList.add("tag");
    tagSpan.innerHTML = tag;
    tagsContainer.appendChild(tagSpan);
  });
};

const selectRandom = () => {
  textarea.disabled = true;
  const lottery = setInterval(() => {
    const randomTag = getRandomTag();
    addHighlightTag(randomTag);
    setTimeout(() => {
      removeHighlightTag(randomTag);
    }, 100);
  }, 100);
  setTimeout(() => {
    clearInterval(lottery);
    setTimeout(() => {
      const winnerTag = getRandomTag();
      addHighlightTag(winnerTag);
      textarea.disabled = false;
    }, 100);
  }, 20 * 100);
};

const getRandomTag = () => {
  const tags = document.querySelectorAll(".tag");
  const number = Math.floor(Math.random() * tags.length);
  return tags[number];
};

const addHighlightTag = (chosenTag) => {
  chosenTag.classList.add("chosen");
};
const removeHighlightTag = (chosenTag) => {
  chosenTag.classList.remove("chosen");
};
