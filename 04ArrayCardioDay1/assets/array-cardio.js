// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with
import { people }  from './people.js';
import { inventors } from './inventors.js';

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

// const fifteen = inventors.filter(function (inventor) {
//  if (inventor.year >= 1500 && inventor.year <= 1599) {
//    return true;  // keep it
//  }
// })

const fifteen = inventors.filter(inventor => {
  return (inventor.year >= 1500 && inventor.year <= 1599) ? 1 : -1;
})
// console.table(fifteen);

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
// const fullNames = inventors.map(inventor => {
//   return `${inventor.first} ${inventor.last}`;
// });
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
// console.log(fullNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
// const ordered = inventors.sort(function (a, b) {
//   if (a.year > b.year) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

// use ternary operator instead
const ordered = inventors.sort(function (a, b) {
  return (a.year > b.year) ? 1 : -1;
});
// console.table(ordered);

    // Array.prototype.reduce()
    // 4. How many years did all the inventors live?
    const totalYears = inventors.reduce(function (total, inventor) {
      return total + (inventor.passed - inventor.year);
    }, 0);
    // console.log(totalYears + " total years lived");

    // 5. Sort the inventors by years lived
    const oldest = inventors.sort(function (a, b) {
      const lastGuy = a.passed - a.year;
      const nextGuy = b.passed - b.year;
      return (lastGuy > nextGuy) ? -1 : 1;
      // return (b.year - a.year) ? 1 : -1;
    })
    // console.table(oldest);

    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
    // const category = document.querySelector('.mw-category');
    // // const links = category.querySelectorAll('a');
    // const links = Array.from(category.querySelectorAll('a'));
    // const de = links
    //   .map(link => link.textContent)
    //   .filter(streetName => streetName.includes('de'));

    // 7. sort Exercise
    // Sort the people alphabetically by last name
    const alpha = people.sort((lastOne, nextOne) => {
      // const parts = lastOne.split(', ');
      const [aLast, aFirst] = lastOne.split(', ');
      const [bLast, bFirst] = nextOne.split(', ');
      return aLast > bLast ? 1 : -1;
    });
    // console.log(alpha);

    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

    // apply reduce method to function, taking in object items
    const transportation = data.reduce(function (obj, item) {
      if (!obj[item]) { // if the object item does not exist
        obj[item] = 0; // then set the object item equal to 0
      }
      obj[item]++;
      return obj;  // return the object
    }, {});

    // start with a blank object
    console.log(transportation);
