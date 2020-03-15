// grab the checkbox elements - all of them
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox');
// console.log(checkboxes);  // generates a nodelist

// declare a variable to keep track of the last checked input
let lastChecked;

function handleCheck(event) {
  // console.log(event.shiftKey);
  // console.log(this.checked);
  // Check if they had the shift key down
  // AND check that they are checking it
  let inBetween = false;
  if(event.shiftKey && this.checked){
    // go ahead and do what we please
    // loop over every single checkbox
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      if(checkbox === this || checkbox === lastChecked){
        inBetween  = !inBetween;
        console.log('Starting to check them in between');
      }

      if(inBetween){
        checkbox.checked = true;
      }
    })
  }


  // what is lastChecked?
  lastChecked = this;

  // console.log(lastChecked);
}


checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
// checkbox.addEventListener('click', handleCheck);
