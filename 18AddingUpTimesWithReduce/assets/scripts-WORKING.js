const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

// console.log(timeNodes, typeof timeNodes);

const seconds = timeNodes
  .map(node => node.dataset.time)
  .map(timeCode => {
    const [mins, secs] = timeCode.split(':').map(parseFloat);
    return (mins * 60) + secs;
    console.log(mins, secs);
  })
  .reduce((total, vidSeconds) => total + vidSeconds);

  let secondsLeft = seconds;
  let hours = Math.floor(secondsLeft / 3600);
  secondsLeft = secondsLeft % 3600;
  const mins = Math.floor(secondsLeft / 60);
  secondsLeft = secondsLeft % 60;
  console.log(secondsLeft);

  // final count of hours, mins, and seconds left
  console.log(hours, mins, secondsLeft);

// console.log(seconds);
