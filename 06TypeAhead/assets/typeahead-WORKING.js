const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];  // instantiate an empty cities array
const prom = fetch(endpoint);
// console.log(prom);

fetch(endpoint)
  // .then(blob => console.log(blob))
  .then(blob => blob.json())
  // .then(data => console.log(data));
  .then(data => cities.push(...data));

// create a function to find matches for city
function findMatches(wordToMatch, cities) {
  // filter the cities array
  return cities.filter(place => {
    // here we need to figure out if the city or the state matches what was searched
    // create a regex to match the word typed, 'g' for global, and 'i' for insenstive (uppercase and lowercase)
    const regex = new RegExp(wordToMatch, 'gi');
    // return the result of the...
    return place.city.match(regex) || place.state.match(regex);
  });
}

// bring in function to convert number with commas
function numberWithCommas(num){
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// create a function to display the matches
function displayMatches(){
  // console.log(this.value);
  const matchArray = findMatches(this.value, cities);
  // console.log(matchArray);
  const html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi');
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
    const cityPopulation = `<span class="bold">${place.population}</span>`;
    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(cityPopulation)}</span>
      </li>
    `;
  }).join('');
  suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
