window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

recognition.addEventListener('result', event => {
  console.log(event.results);
  const transcript = Array.from(event.results)
  .map(result => result[0])
  .map(result => result.transcript)
  .join('');
  // console.log(transcript);
})

recognition.start(event);
