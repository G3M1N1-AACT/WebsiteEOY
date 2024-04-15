const body = document.body;

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

var gameArea = document.getElementById('gameArea');

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('videoPlayer', {
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
        audio.pause(); // Pause the audio when the video is playing
    }
}

// JavaScript for Footer enhancement
let currentYear = new Date().getFullYear(); // Get current year
let copyRightEl = document.querySelector('&copy; 2024 Down the Rabbit Hole') // Select the paragraph where copyright year is mentioned
let oldText = copyRightEl.innerText; // Store the existing text
copyRightEl.innerText = oldText.replace('2024', currentYear); // Replace '2024' with current year

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