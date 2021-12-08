// grab all the panels
const panels = document.querySelectorAll('.panel');

// create a function to toggle '.open' class on panels
function toggleOpen(){
  // console.log(this);
  this.classList.toggle('open');
}

function toggleActive(event){
  // console.log(event.propertyName);
  if(event.propertyName.includes('flex')){
    this.classList.toggle('open-active');
  }
}

// add event listeners for panel click and transition events
// panels.addEventListener('click', toggleOpen);
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
