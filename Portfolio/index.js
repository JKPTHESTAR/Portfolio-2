const projectContainer = document.querySelector(".project_container");

const projects = [
  {
    image: "images/GithubProfileViewer.png",
    title: "GitHub Profile Viewer",
    url: "../GitHub-Profile-Viewer/index.html",
  },
  {
    image: "images/LifeTimer.PNG",
    title: "Life Timer",
    url: "../Life-Timer/index.html",
  },
  {
    image: "images/QRCodeGenerator.png",
    title: "QR Code Generator",
    url: "../QR-Code-Generator/index.html",
  },
  {
    image: "images/ExpenseTracker.png",
    title: "Expense Tracker",
    url: "../Expense-Tracker/index.html",
  },
  {
    image: "images/TinDogClone.PNG",
    title: "TinDog Clone ",
    url: "../TinDog-Start-master/index.html",
  },
  {
    image: "images/DiceGame.PNG",
    title: "Dice Game ",
    url: "../Dicee-Game/index.html",
  },
];

const showProjects = () => {
  let output = "";
  projects.forEach(
    ({ image, title, url }, i) =>
      (output += `
      <div class="grid_item">
      <div class="card">
        <img src="${image}" id="projectImgId" alt="Project ${i}" />
        <a href="${url}">
          <div class="card_content">
            <h3>${title}</h3>
          </div>
        </a>
      </div>
    </div>
    `)
  );
  projectContainer.innerHTML = output;
};

showProjects();
