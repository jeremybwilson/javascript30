// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with
// import { people }  from './people.js';
// import { inventors } from './inventors.js';
import { people }  from './people.js';
import { inventors } from './inventors.js';

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const fifteen1 = inventors.filter((inventor)=> {
  if(inventor.year >= 1500 && inventor.year <= 1599){
    return true;
  }  // no need to return false
});
// console.table(fifteen1);

// can be greatly reduced.  How about an arrow function
const bornInFifteenHundreds2 = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year <= 1599));
// console.table(bornInFifteenHundreds2);

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
// one liner
const fullNames = inventors.map(inventor => {
  return `${inventor.first} ${inventor.last}`;
});
// console.log(fullNames);

const fullNames2 = inventors.map(inventor =>  `${inventor.first} ${inventor.last}`);
// console.log(fullNames2);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const orderedByBirthdate1 = inventors.sort((a, b) => {
  if(a.year > b.year){
    return 1;
  } else {
    return -1;
  }
});
console.table(orderedByBirthdate1);

const orderedByBirthdate2 = inventors.sort((a, b) => {
  if(a.year > b.year){
    return 1;
  } else {
    return -1;
  }
});
// one liner
const orderedByBirthdate3 = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
// console.log(orderedByBirthdate2);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0)
// console.log(totalYears);

// 5. Sort the inventors by years lived
const oldest = inventors.sort(function(a, b){
  const lastGuy = a.passed - a.year;
  const nextGuy = b.passed - b.year;
  return lastGuy > nextGuy ? -1 : 1;
})
// console.table(oldest);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// do this one from the console on the URL provided
// const category = document.querySelector('.mw-category');
// // const links = Array.from(category.querySelectorAll('a'));
// const links = [...category.querySelectorAll('a')];

// const streets = links
//   .map(link => link.textContent)
//   .filter(streetName => streetName.includes('de'));

// console.table(streets);

// 7. sort Exercise
// Sort the people alphabetically by last name
const orderByLastName = people.sort((lastOne, nextOne) => {
  const [aLast, aFirst] = lastOne.split(', ');
  const [bLast, bFirst] = nextOne.split(', ');
  return aLast > bLast ? 1 : -1;
});

// console.log(orderByLastName);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

const transportation = data.reduce((object, item) => {
  if(!object[item]){
    object[item] = 0;
  }
  object[item]++;
  return object;
}, {});
// console.log(transportation);
