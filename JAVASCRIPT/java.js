
var audio = new Audio("C:\\Users\\daw10\\OneDrive\\Documentos\\PROG1185 - JAVA - DImitri\\Login_Maryssa\\WebsiteEOY\\SOUNDS\\Characters Page.mp3");
audio.play()

// JavaScript for dynamic header navigation links
document.addEventListener("DOMContentLoaded", function() {
  const pages = [
      {link:"index.html", text:"Home"},
      {link:"Characters.html", text:"Characters"},
      {link:"Games.html", text:"Games"},
      {link:"Story.html", text:"Story"},
  ];
  const navigation = document.querySelector('#navigation-list');
  pages.forEach(page => {
      const listItem = document.createElement('li');
      const link = document.createElement('a');
      link.href = page.link;
      link.textContent = page.text; 
      listItem.appendChild(link);
      navigation.appendChild(listItem);
  });
});

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

// JavaScript for Footer enhancement
let currentYear = new Date().getFullYear(); // Get current year

// Select the copyright element by its new id
let copyrightElement = document.querySelector('#copyright');

// Replace '2024' with current year
copyrightElement.innerText = ` ${currentYear} Down the Rabbit Hole`;

let emailField = document.querySelector('#userEmail'); // ID of the email input field in your form
let form = document.querySelector('#emailForm'); // ID of your form

form.addEventListener('submit', function(event) {
  let email = emailField.value; // get input value
  let regex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/; // basic regex for email validation

  if (!regex.test(email)) {
      alert('Please enter a valid email address.');
      event.preventDefault(); // prevent form from submitting
  }
});

window.onload = function() {
  var i = 0;
  var txt = 'Play with your own imagination! Click & choose your own background.'; /* The text */
  var speed = 50; /* The speed/duration of the effect in milliseconds */

  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("main-title").innerHTML = txt.slice(0, i+1);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  // Initiate typewriter effect
  typeWriter();
}

