
// Change background color periodically
let currentColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`; // Initial random color

function changeBackgroundColor() {
  const newColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  const body = document.body;
  body.style.backgroundColor = currentColor; // Set current color

  // Transition smoothly to new color
  body.style.transition = 'background-color 2s ease-in-out'; // Adjust transition duration as needed
  currentColor = newColor; // Update current color for next transition

  // Call this function again after a certain interval (e.g., 3 seconds)
  setTimeout(changeBackgroundColor, 3000);
}

// Add click event listener and sound effect for teacup
const teacup = document.getElementById("teaCup");
const teacupSound = document.getElementById("teaCupSound");

teacup.addEventListener("click", () => {
  teacupSound.play();
  teacup.classList.toggle("tea-cup-shake"); // Add shaking animation class
});

// Add pop-up description on hover (example using vanilla JS)
const welcomeText = document.getElementById("welcomeText");
const popUp = document.createElement("div"); // Create pop-up element outside event listeners for better performance

welcomeText.addEventListener("mouseover", () => {
  pop
