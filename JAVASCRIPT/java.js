
// Add pop-up description on hover (example using vanilla JS)
const welcomeText = document.getElementById("welcomeText");
const popUp = document.createElement("div"); // Create pop-up element outside event listeners for better performance

welcomeText.addEventListener("mouseover", () => {
  popUp.textContent = "Welcome text content"; // Set pop-up content (replace with your desired text)
  popUp.style.position = "absolute"; // Position the pop-up element
  popUp.style.top = "0"; // Adjust pop-up position as needed
  popUp.style.left = "0"; // Adjust pop-up position as needed
  welcomeText.appendChild(popUp); // Add pop-up to the welcomeText element
});

welcomeText.addEventListener("mouseout", () => {
  welcomeText.removeChild(popUp); // Remove pop-up on mouseout
});

// Get a reference to the audio element (assuming it has an ID of "myAudio")
var audio = document.getElementById("myAudio");

// Get a reference to the audio element
var audio = document.getElementById("myAudio");

// Function to play the audio on repeat
function playMusicOnRepeat() {
  audio.play();  // Start playing the audio
  audio.addEventListener("ended", function() {
    audio.currentTime = 0;  // Rewind to the beginning when it ends
    audio.play();  // Start playing again
  });
}

// Call the playMusicOnRepeat function when the page loads
window.onload = playMusicOnRepeat;

