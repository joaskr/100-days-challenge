const projects = [
  {
    name: "QR-code-component",
    github: "link",
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
