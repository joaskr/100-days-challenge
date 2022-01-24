const projects = [
  {
    name: "element 1",
    github: "link",
  },
  {
    name: "element 1",
    github: "link",
  },
  {
    name: "element 1",
    github: "link",
  },
  {
    name: "element 1",
    github: "link",
  },
  {
    name: "element 1",
    github: "link",
  },
  {
    name: "element 1",
    github: "link",
  },
  {
    name: "element 1",
    github: "link",
  },
];

const list = document.getElementById("list");

projects.forEach(({ name, github }, i) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = `
    <a href="/${name}/index.html">
      <img src="/${name}/design/desktop-design.jpg" alt="${name}" />
      <p>${i + 1}. ${name}</p>
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
