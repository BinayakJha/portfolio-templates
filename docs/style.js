import projects from "./projects.js";
console.log(projects);
const overlay = document.querySelector(".overlay");
const overlayImage = document.querySelector(".overlay__inner img");
const overlayLink = document.querySelector(".overlay__inner a");

function open(e) {
  overlay.classList.add("open");
  const src = e.currentTarget.querySelector("img").src;
  const href = e.currentTarget.querySelector("a")
    ? e.currentTarget.querySelector("a").href
    : "#";
  overlayImage.src = src;
  overlayLink.href = href;
}

function close() {
  overlay.classList.remove("open");
}

const render = function (projects) {
  projects["projects"].forEach((p) => {
    const project = document.createElement("div");
    project.classList.add("project");
    project.innerHTML = `<img class="project__image"
        src="./docs/${p.img}" />
    <div class="grid__overlay">
        <p>${p.name}</p>
        <a href="${p.link}/" style="pointer-events:none"></a>
        <h3 class="grid__title">${p.desination}</h3>
    </div>
    <div class="grid__overlay animatable">
        <button class="viewbutton">view more</button>
    </div>`;
    overlay.insertAdjacentElement("beforebegin", project);
  });
};

window.onload = function () {
  render(projects);
  const buttons = document.querySelectorAll(".project");
  buttons.forEach((button) => {
    button.addEventListener("click", open);
  });
  overlay.addEventListener("click", close);
};
