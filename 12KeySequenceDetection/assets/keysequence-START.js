const pressed = [];
const secretCode = 'jeremy';

window.addEventListener('keyup', (e) => {
  console.log(e.key);
  pressed.push(e.key);
  // looking for the secret code, we want to start from the end of the 'pressed' array
  // then we will trim the 'pressed.length' minus the secret code length
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

  // now we want to check for the secret code in the 'pressed' array
  if(pressed.join('').includes(secretCode)){
    console.log('WINNER WINNER, CHICKEN DINNER!');
    cornify_add();
  }
  console.log(pressed);
})
