// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with
// import { people }  from './people.js';
// import { inventors } from './inventors.js';
import { people }  from './people.js';
import { inventors } from './inventors.js';

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const  fifteenHundreds = inventors.filter((inventor) => {
  if(inventor.year >= 1499 && inventor.year <= 1599){
    return true;
  }
});
// console.table(fifteenHundreds);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names

// const names = inventors.map(inventor => {
//   return `${inventor.first} ${inventor.last}`;
// });
// one liner version of the above
const names = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(names);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const sorted = inventors.sort((a, b) => {
  // if(a.year > b.year){
  //   return 1;
  // } else {
  //   return -1;
  // }
  return a.year > b.year ? 1 : -1;
});
// console.table(sorted);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const yearsLived = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);
// console.log(yearsLived);

// 5. Sort the inventors by years lived
const sortedByYears = inventors.sort((a, b) => {
  const lastGuy = a.passed - a.year;
  const nextGuy = b.passed - b.year;
  return lastGuy > nextGuy ? 1 : 1;
});
// console.table(sortedByYears);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
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
  // const parts = lastOne.split(', ');
  const [aLast, aFirst] = lastOne.split(', ');
  const [bLast, bFirst] = nextOne.split(', ');
  return aLast > bLast ? 1 : -1;
});
// console.table(orderByLastName);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

const sums = data.reduce((object, item) => {
  if(!object[item]){
    object[item] = 0;
  }
  object[item]++;
  // console.log(item);
  return object;
}, {});
console.log(sums);

// console.log(transportation);
