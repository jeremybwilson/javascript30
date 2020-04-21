window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

recognition.addEventListener('result', event => {
  // console.log(event.results);
  const transcript = Array.from(event.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');
  // console.log(transcript);

  // censored words
  const poopScript = transcript.replace(/poop|poo|fuck|frack|damn|pussy|cock|shit|dump/gi, '💩');
  p.textContent = poopScript;

  if (event.results[0].isFinal){
    p = document.createElement('p');
    words.appendChild(p);
  }

  if (transcript.includes('unicorn')){
    console.log('🦄🦄🦄🦄🦄🦄');
  }

})

// adding an event listener for the 'end' event
recognition.addEventListener('end', recognition.start);

recognition.start(event);
