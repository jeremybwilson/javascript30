// declare variables for clock hands
// declare variables for clock hands
// capture the second hand element in the DOM
const secondHand = document.querySelector('.second-hand');
// capture the minute hand element in the DOM
const minuteHand = document.querySelector('.min-hand');
// capture the minute hand element in the DOM
const hourHand = document.querySelector('.hour-hand');

const setDate = () => {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  // get minutes
  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + 90;
  minuteHand.style.transform = `rotate(${minsDegrees}deg)`;

  // get hours
  const hours = now.getHours();
  const hourDegrees = ((hours / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  // console.log("Time: " + hours + ":" + mins + ":" + seconds);

}

setInterval(setDate, 1000);
