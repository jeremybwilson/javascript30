// select the overal form element
const addItems = document.querySelector('.add-items');
// select the ul with class of 'plates' to store all the tapas dishes
const itemsList = document.querySelector('.plates');
// const items = [];
// persist items array by reading it in from localStorage
const items = JSON.parse(localStorage.getItem('items')) || [];  // if no values are present, fall back to an empty array

// create a function to handle the addItem event
function addItem(event){
  // stop the form from submitting with event.preventDefault();
  event.preventDefault();
  // take the text of the submitted form field and add it to the list
  // capture text from form field
  const text = (this.querySelector('[name=item]')).value;
  // create an item object
  const item = {
    text: text,
    done: false
  }
  // console.log(item);
  // push to the items array
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  // now reset the form element
  this.reset();
  // console.log(`.:: DEBUG ::. value of this: `, this);
}

function populateList(plates = [], platesList){
  // console.log(`.:: DEBUG ::. populateList function here.`);
  platesList.innerHTML = plates.map((plate, i) => {
    return `
      <li>
      <input type="checkbox" data-index=${i} id="item${i}" ${ plate.done !== false ? 'checked' : ''} />
        <label for="item${i}">${plate.text}</label>
      </li>
    `;
  }).join('');
}

function toggleDone(event){
  // event delegation -> very responsible parent, irresponsible child
  // want to check if the target matches the thing that we are looking for
  if (!event.target.matches('input')) return;  // skip this unless it's an input
  console.log(event.target);

  // get the element
  const el = event.target;
  // console.log(el.dataset.index);  // this is why we put a data-index on each of the checkboxes

  // get the element index
  const index = el.dataset.index;

  // take our items from the index, set it to itself but opposite
  items[index].done =!items[index].done;

  // set the items to localStorage
  localStorage.setItem('items', JSON.stringify(items));

  // run populateList function once more
  populateList(items, itemsList);

}
// function to add taco when checkbox is checked
// const addTaco = (event) => {
//   // prevent the default page refresh action
//   event.preventDefault();
//   console.log(`.:: DEBUG ::. List item (input) was checked`);
// }

// create eventListeners here

// add an event listener for when submit button is clicked
addItems.addEventListener('submit', addItem);
// add an event listener for when checkbox is checked
itemsList.addEventListener('click', toggleDone);

// run populate list once more, remember that items doesn't exist on page load unless we read it in from localStorage first, see line #7
populateList(items, itemsList);
