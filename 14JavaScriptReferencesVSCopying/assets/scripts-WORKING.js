// start with strings, numbers and booleans
let age = 100;
let age2 = age;
// console.log(`age, age2: `, age, age2);
age = 200;
// console.log(`age, age2: `, age, age2);

let name = 'Jeremy';
let name2 = name;
// console.log(`name, name2: `, name, name2);
name = 'Geronimo';
// console.log(`name, name2: `, name, name2);

// Let's say we have an array
const players = ['Jeremy', 'Anika', 'Alex', 'Chewie'];

// and we want to make a copy of it.
const team = players;
// console.log(players);
// console.log(team);

// You might think we can just do something like this:
// team[3] = 'Paulie';
// console.log(players);
// console.log(team);

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
const team2 = players.slice();

// one day

// or create a new array and concat the old one in
const team3 = [].concat(players);

// or use the new ES6 Spread
const team4 = [...players];
team4[3] = 'yippy kay yaay...';
// console.log(team4);

const team5 = Array.from(players);
// console.log(team5);

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: 'Jeremy Wilson',
  age: 80
}

// and think we make a copy:
// const captain = person;
// captain.number = 99;

// how do we take a copy instead?
const cap2 = Object.assign({}, person, {number: 99, age: 12});

// We will hopefully soon see the object ...spread
const cap3 = {...person};

// Things to note - this is only 1 level deep - both for Arrays and Objects.
// lodash has a cloneDeep method, but you should think twice before using it.

const jeremy = {
  name: 'Jeremy',
  age: 43,
  social: {
    twitter: '@jeremybwilson',
    facebook: 'jeremybwilson'
  }
}

// console.clear();
// console.log(jeremy);

const dev = Object.assign({}, jeremy);

// poor mans' deep clone - not recommended
// JSON.stringify() to immediately convert object to a string
// JSON.parse() to then immediately convert it back to an object
const dev2 = JSON.parse(JSON.stringify(jeremy));
