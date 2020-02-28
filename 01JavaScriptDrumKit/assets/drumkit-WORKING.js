// create a function to play the sound
const playSound = (event) => {
  // console.log('Playing a sound');

  // get the key code for the pressed key
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  // put into a variable the corresponding key for each key that is selected
  // const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
  // console.log(audio);
  // if there is no audio specific key press selected
  //  stop the function from running altogether
  if(!audio) return;
  key.classList.add('playing');
  audio.currentTime = 0;  // rewind to the start
  audio.play();
}

const removeTransition = (event) => {
  // console.log('Removing transition');
  // console.log(event);
  // if the event propertyName does not equal 'transform'
  if (event.propertyName !== 'transform') return; // then skip it if it's not a transform
  event.target.classList.remove('playing');
}

// put into an array all the keys that are pressed
const keys = Array.from(document.querySelectorAll('.key'));
// iterate through each item in the newly created array
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
// add a eventListener to the window for when a key is pressed
window.addEventListener('keydown', playSound);
