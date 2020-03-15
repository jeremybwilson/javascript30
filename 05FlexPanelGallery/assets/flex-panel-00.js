const panels = document.querySelectorAll('.panel');

function toggleOpen(event){
  // console.log(event.propertyName);
  this.classList.toggle('open');
}

function toggleActive(e){
  console.log(event.propertyName);
  if(event.propertyName.includes('flex')){
    this.classList.toggle('open-active');
  }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
