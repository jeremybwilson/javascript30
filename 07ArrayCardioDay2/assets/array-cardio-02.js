// Get your shorts on - this is an array workout!
// ## Array Cardio Day 2

// Some data we can work with
import { people } from './people.js';
import { comments } from './comments.js';

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
// const isAdult = people.some(function(person) {
//   const currentYear = (new Date().getFullYear());
//   if(currentYear - person.year >= 19){
//     return true;
//   }
// });

// const isAdult1 = people.some(person => {
//   const currentYear = (new Date().getFullYear());
//   return currentYear - person.year >= 19;
// });

// if you want to be a hotshot
const isAdult3 = people.some(person => (new Date().getFullYear()) - person.year >= 19);
// console.log({isAdult3});

// Array.prototype.every() // is everyone 19 or older?
const allAdults = people.every(person => (new Date().getFullYear()) - person.year >= 19);
// console.log({allAdults});

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const comment = comments.find(function(comment){
  if(comment.id === 542328) {
    return true;
  }
});
// console.log(comment);

const comment1 = comments.find(comment => comment.id === 823423);
// console.log(comment1);

// converted to arrow function and using ternary operator


// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const index = comments.findIndex(comment => comment.id === 823423);
// console.log(index);

// comments.splice(index, 1);
// console.table(comments);

// delete the comment with the ID of 823423
const newComments = [
  ...comments.slice(0, index),
  ...comments.slice(index + 1)
];
console.table(newComments);

