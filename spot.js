const audioLinks = document.querySelectorAll('.audio-link');
const audioPlayer = document.getElementById('audio-player');

audioLinks.forEach(audioLink => {
  audioLink.addEventListener('click', e => {
    e.preventDefault(); // prevent default link behavior

    const audioSrc = audioLink.getAttribute('data-src');
    audioPlayer.src = audioSrc;
    audioPlayer.play();
  });
});
