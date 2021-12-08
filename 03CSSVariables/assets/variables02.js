// const inputs = Array.from(document.querySelectorAll('.controls input'));
const inputs = document.querySelectorAll('.controls input');
// console.log(inputs);

function handleUpdate(){
  // console.log(this.value);
  const suffix = this.dataset.sizing || '';
  // console.log(suffix);
  // document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('click', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
