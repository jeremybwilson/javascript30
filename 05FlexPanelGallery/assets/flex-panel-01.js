// grab all the panels
const panels = document.querySelectorAll('.panel');

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

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
