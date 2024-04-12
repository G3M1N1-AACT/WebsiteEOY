const body = document.body;

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