const audioPlayer = document.getElementById('audio-player');
const playButton = document.getElementById('play-btn');
const pauseButton = document.getElementById('pause-btn');
const progressBar = document.getElementById('progress');
const progressBarContainer = document.getElementById('progress-bar');

playButton.addEventListener('click', () => {
  audioPlayer.play();
});

pauseButton.addEventListener('click', () => {
  audioPlayer.pause();
});

audioPlayer.addEventListener('timeupdate', () => {
  const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
  progressBar.style.width = `${progress}%`;
});

progressBarContainer.addEventListener('click', (e) => {
  const clickPosition = e.offsetX;
  const width = progressBarContainer.clientWidth;
  const duration = audioPlayer.duration;

  audioPlayer.currentTime = (clickPosition / width) * duration;
});