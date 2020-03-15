const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 50;
// ctx.globalCompositeOperation = 'multiply';

let isDrawing = false;
let lastX = 0,
    lastY = 0,
    hue = 0;
let direction = true;

function draw(event) {
  if(!isDrawing) return; // stop the function from running when they are not moused down
  // console.log(e);
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.lineWidth = hue;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
  // lastX = e.offsetX;
  // lastY = e.offsetY;
  // destructure the variables here instead
  [lastX, lastY] = [event.offsetX, event.offsetY];
  hue++;
  // alternate the size of the line width
  if(hue >= 360){
    hue = 0;
  }
  // if ctx.lineWidth greater than or equal to 100 or if ctx.lineWidth is less than or equal to 1
  if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1){
    // flip the direction
    direction = !direction;
  }
  if(direction){
    ctx.lineWidth++;  // increment the lineWidth
  }
  ctx.lineWidth--;  // decrement the lineWidth
}

canvas.addEventListener('mousedown', (event) => {
  isDrawing = true;
  // destructure the variables here instead
  [lastX, lastY] = [event.offsetX, event.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
