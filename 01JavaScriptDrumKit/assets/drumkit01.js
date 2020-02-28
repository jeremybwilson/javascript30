const playSound = (event) => {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
  if (!audio) return; // stop the function from running altogether
  audio.currentTime = 0;  // rewind to the start
  audio.play();
  key.classList.add('playing');
}

const removeTransition = (event) => {
  if (event.propertyName !== 'transform') return; // skip it if it's not a transform
  event.target.classList.remove('playing');
};

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
