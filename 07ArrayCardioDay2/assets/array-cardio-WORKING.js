// ## Array Cardio Day 2

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const isAdult1 = people.some(function(person) {
  const currentYear = (new Date().getFullYear());
  if(currentYear - person.year >= 19){
    return true;
  }
});
// console.log(isAdult1);

const isAdult2 = people.some(person => ((new Date()).getFullYear()) - person.year >= 19);
// console.log(isAdult2);

// Array.prototype.every() // is everyone 19 or older?
const allAdults = people.every(person => ((new Date()).getFullYear()) - person.year >= 19);
// console.log(allAdults);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const comment1 = comments.find(comment => {
  if(comment.id === 823423){
    return true;
  }
});
// converted to arrow function and using ternary operator
const comment2 = comments.find(comment => {
  if(comment.id === 823423){
    return true;
  } else {
    return false;
  }
});
const comment3 = comments.find(comment => comment.id === 823423 ? true : false);

// console.log(comment1, comment2, comment3);
// console.log(comment3);

// Array.prototype.findIndex()
// Find the comment with this ID
const index = comments.findIndex(comment => comment.id === 823423);
// console.log(index);

// delete the comment with the ID of 823423
const newComments = [
  // ... spread the comments into the array newComments
  ...comments.slice(0, index),  // start at 0 and go until the index
  ...comments.slice(index + 1)  // start at the index, and go until the end
];
console.table(newComments);
