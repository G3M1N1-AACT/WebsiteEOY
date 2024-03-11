
var audio = new Audio("C:\\Users\\daw10\\OneDrive\\Documentos\\PROG1185 - JAVA - DImitri\\Login_Maryssa\\WebsiteEOY\\SOUNDS\\AIW.mp3");
audio.play();

const body = document.body;

const backgroundImages = [
  "url(../IMAGES/4.jpg)",
  "url(../IMAGES/2.jpg)",
  "url(../IMAGES/cheshire-grin.jpg)",
  "url(../IMAGES/5.jpg)",
  "url(../IMAGES/6.jpg)",
];

function changeBackground(index) {
  body.style.backgroundImage = backgroundImages[index];
}

const backgroundButtons = document.querySelectorAll(".background-button");

backgroundButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    changeBackground(index);
  });
});