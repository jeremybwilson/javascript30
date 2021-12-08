const inputs = Array.from(document.querySelectorAll('.controls input'));
// const inputs = document.querySelectorAll('.controls input');
// console.log(inputs);

const handleUpdateArrowFunc = () => {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

function handleUpdate(){
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  // console.log(suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
