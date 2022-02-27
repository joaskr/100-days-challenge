const projects = [
  {
    name: "QR-code-component",
    github:
      "https://github.com/joaskr/100-days-challenge/tree/main/QR-code-component",
  },
  {
    name: "Guess-song",
    github: "https://github.com/joaskr/100-days-challenge/tree/main/Guess-song",
  },
  {
    name: "Tricky-button",
    github:
      "https://github.com/joaskr/100-days-challenge/tree/main/Tricky-button",
  },
  {
    name: "Ambience",
    github: "https://github.com/joaskr/100-days-challenge/tree/main/Ambience",
  },
  {
    name: "Color-switch",
    github:
      "https://github.com/joaskr/100-days-challenge/tree/main/Color-switch",
  },
  {
    name: "Zodiac-cards",
    github:
      "https://github.com/joaskr/100-days-challenge/tree/main/Zodiac-cards",
  },
  {
    name: "Keyboard",
    github: "https://github.com/joaskr/100-days-challenge/tree/main/Keyboard",
  },
  {
    name: "ping-coming-soon-page",
    github:
      "https://github.com/joaskr/100-days-challenge/tree/main/ping-coming-soon-page",
  },
  {
    name: "Password-viewer",
    github:
      "https://github.com/joaskr/100-days-challenge/tree/main/Password-viewer",
  },
  {
    name: "Pride",
    github: "https://github.com/joaskr/100-days-challenge/tree/main/Pride",
  },
  {
    name: "Picker",
    github: "https://github.com/joaskr/100-days-challenge/tree/main/Picker",
  },
  {
    name: "Get-random",
    github: "https://github.com/joaskr/100-days-challenge/tree/main/Get-random",
  },
];

const list = document.getElementById("list");

const formatName = (name) => {
  return name
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};

projects.forEach(({ name, github }, i) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = `
    <a href="/${name}/index.html">
      <img src="/${name}/design/desktop-design.jpg" alt="${name}" />
      <p>${i + 1}. ${formatName(name)}</p>
    </a>
    <div class="links-container">
      <a href="/${name}/index.html" class="view">
        <i class="fas fa-eye"></i>
      </a>
      <a href="${github}" class="github">
          <i class="fab fa-github"></i>
      </a>
    </div>
  `;
  list.appendChild(listItem);
});
