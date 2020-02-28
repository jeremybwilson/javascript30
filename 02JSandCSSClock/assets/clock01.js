// declare variables for clock hands
// capture the second hand element in the DOM
const hourHand = document.querySelector('.hour-hand');
// capture the minute hand element in the DOM
const minuteHand = document.querySelector('.min-hand');
// capture the minute hand element in the DOM
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + 90;
  minHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = ((mins / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  // console.log("Time: " + hours + ":" + mins + ":" + seconds);
}

setInterval(setDate, 1000);

setDate();
