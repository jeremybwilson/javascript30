const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

// function to strip the article
function stripBandName(bandName){
  return bandName.replace(/^(a |the |an )/i, '').trim();
}

// sort the band names after applying the previously established stripBandName function
const sortedBands = bands.sort((a, b) => {
  return stripBandName(a) > stripBandName(b) ? 1 : -1;
});

const sortedBandsContainer = document.querySelector('#bands');

sortedBandsContainer.innerHTML =
  sortedBands
    .map(band => `<li>${band}</li>`)
    .join('');

console.log(sortedBands);
