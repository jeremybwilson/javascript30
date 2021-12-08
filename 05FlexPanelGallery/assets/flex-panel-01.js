// grab all the panels
const panels = document.querySelectorAll('.panel');

// create a function to toggle '.open' class on panels
function toggleOpen(event){
  // console.log(this);
  console.log(event.propertyName);
  this.classList.toggle('open');
}

// create a function to toggle which slide is active
function toggleActive(event){
  // console.log(event.propertyName);
  if(event.propertyName.includes('flex')){
    this.classList.toggle('open-active');
  }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
