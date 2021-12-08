// grab all the panels
const panels = document.querySelectorAll('.panel');
const panelsArray = Array.from(document.querySelectorAll('.panel'));
// console.log(panels);
// console.log(panelsArray);

// create a function to toggle '.open' class on panels
function toggleOpen(event){
  console.log(this);
  this.classList.toggle('open');
}

// create a function to toggle which slide is active
function toggleActive(event){
  // console.log(`Toggle the active element`);
  // console.log(event.propertyName);
  if(event.propertyName.includes('flex')){
    this.classList.toggle('open-active');
  }
}

// panelsArray.forEach(panel => panel.addEventListener('click', toggleOpen));
// panelsArray.forEach(panel => panel.addEventListener('transitionend', toggleActive));

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
