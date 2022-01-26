const ideas = [];
const userNames = [];
const userIdeas = [];
const app = document.querySelector(".app-container");
const submitBtn = document.querySelector(".main-button");
const postForm = document.querySelector(".post-form");
const mainForm = document.querySelector('.main-form');

function getNameIdeas() {
  const yourName = document.createElement("h2");
  const nameSource = document.getElementById("your-name");
  const h2Container = document.createElement("div");

  const ideasSource = document.getElementById("ideas-for");
  const ideas = document.createElement("h3");
  const h3Container = document.createElement("div");

  yourName.textContent = `Hi, ${nameSource.value}`;
  h2Container.appendChild(yourName);

  ideas.textContent = `Ideas for ${ideasSource.value}`;
  h3Container.appendChild(ideas);

  if (ideasSource.value == null ||
    ideasSource.value.length == 0
  ) {
    ideasSource.classList.add("error", "shake");
  } else if (nameSource.value.length == 0 || nameSource.value == null) {
    nameSource.classList.add("error", "shake");
  } else {
    userNames.push(h2Container);
    userIdeas.push(h3Container);
    app.insertAdjacentElement("afterbegin", ...userNames);
    app.append(...userIdeas);
    app.style.visibility = 'visible';
    mainForm.style.display = 'none';
  }
}

submitBtn.addEventListener("click", getNameIdeas);
