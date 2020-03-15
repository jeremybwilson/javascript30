// select the overal form element
const addItems = document.querySelector('.add-items');
// select the ul with class of 'plates' to store all the tapas dishes
const itemsList = document.querySelector('.plates');
// const items = [];
// persist items array by reading it in from localStorage
const items = JSON.parse(localStorage.getItem('items')) || [];  // if no values are present, fall back to an empty array

// create a function to handle the addItem event
function addItem(event){
  console.log('Hello');
  // stop the form from submitting with event.preventDefault();
  event.preventDefault();
  // create a variable to store the text from the form field 'item name'
  const text = (this.querySelector('[name=item]')).value;
  // create a item object
  const item = {
    // text: text,  // instead us the ES6 shorthand property
    text,
    done: false
  };
  // console.log(item);
  items.push(item);
  populateList(items, itemsList);
  // set our items array above, 'items' into local storage
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
}

// create a function to populate the list
/// the populateList function needs two things: 1) the empty 'plates' object, and 2) and a place to put the html called 'platesList'
function populateList(plates = [], platesList){  // pre define an empty plates array
  console.log('Populating the list');
  // loop over every single item in our array, and
  // stick the plates.map() results directly into the returned HTML
  platesList.innerHTML = plates.map((plate, i) => {  // map will take in an array of raw data and return an array of some other raw data
    // return some HTML
    return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${ plate.done ? 'checked' : '' } />
        <label for="item${i}">${plate.text}</label>
      </li>
    `;
  }).join('');

}

function toggleDone(event){
  // event delegation -> responsible parent, irresponsible child
  // want to check if the target matches the thing that we are looking for
  if(!event.target.matches('input')) return;  // skip this unless it's an input
  // get the element
  const el = event.target;
  // get the element index
  const index = el.dataset.index;
  console.log(el.dataset.index);  // this is why we put a data-index on each of the checkboxes
  // take our items from the index, set it to itself but opposite
  items[index].done = !items[index].done;
  // set the items to localStorage
  localStorage.setItem('items', JSON.stringify(items));
  // run populateList function once more
  populateList(items, itemsList);
}

// create eventListeners here
// cover all of our bases and listen to the submit event
addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);

// run populate list once more, remember that items doesn't exist on page load unless we read it in from localStorage first, see line #7
populateList(items, itemsList);
