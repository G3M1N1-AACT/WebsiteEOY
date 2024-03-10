var audio = document.getElementById("myAudio");

// Function to play the audio on repeat
function playMusicOnRepeat() {
  audio.play();  // Start playing the audio
  audio.addEventListener("ended", function() {
    audio.currentTime = 0;  // Rewind to the beginning when it ends
    audio.play();  // Start playing again
  });
}

// Call the playMusicOnRepeat function when the page loads (or after the element is loaded)
window.onload = playMusicOnRepeat;
