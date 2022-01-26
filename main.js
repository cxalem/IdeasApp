const ideas = [];
const userNames = [];
const userIdeas = [];
const appContainer = document.querySelector(".app-container");
const submitBtn = document.querySelector(".main-button");
const mainForm = document.querySelector('.main-form');
const app = document.getElementById('app');
const container = document.querySelector('.container');
const postBtn = document.querySelector('.post-button');
const postForm = document.getElementById('ideas-form');

const getNameIdeasFor = () => {
  const yourName = document.createElement("h2");
  const nameSource = document.getElementById("your-name");
  const h2Container = document.createElement("div");

  const ideaSource = document.getElementById("ideas-for");
  const ideas = document.createElement("h3");
  const h3Container = document.createElement("div");

  yourName.textContent = `Hi, ${nameSource.value}`;
  h2Container.appendChild(yourName);

  ideas.textContent = `Ideas for ${ideaSource.value}`;
  h3Container.appendChild(ideas);

  if (ideaSource.value == null ||
    ideaSource.value.length == 0) {
    ideaSource.classList.add("error", "shake");
  } else if (nameSource.value.length == 0 || nameSource.value == null) {
    nameSource.classList.add("error", "shake");
  } else {
    userNames.push(nameSource.value);
    userIdeas.push(ideaSource.value);
    appContainer.insertAdjacentElement("afterbegin", h2Container);
    appContainer.insertBefore(h3Container, app);
    appContainer.style.visibility = 'visible';
    container.removeChild(mainForm);
  }
}

const addIdea = () => {
  const ideaContainer = document.createElement('div');
  ideaContainer.classList.add('idea-container');
  const name = document.createElement('h4');
  const idea = document.createElement('span');

  name.textContent = userNames;
  idea.textContent = postForm.value;

  if (postForm.value == null ||
    postForm.value.length == 0) {
    postForm.classList.add("error", "shake");
  } else {
    likeBtn();
    ideaContainer.append(name, idea, likeBtn);

    console.log(likeBtn)
  
    ideas.push(ideaContainer);
    app.append(...ideas);

    postForm.value = '';
  }
}

const likeBtn = () => {
  const likeBtn = document.createElement('button');
  const heart = document.createElement('img');
  const likeSpan = document.createElement('span');

  heart.src = './img/heart.svg';
  likeSpan.textContent = 0;
  likeBtn.classList.add('like-btn');

  likeBtn.append(heart, likeSpan);

}

submitBtn.addEventListener("click", getNameIdeasFor);
postBtn.addEventListener('click', addIdea);
