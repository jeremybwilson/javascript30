function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this, args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// find all images
// const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(event){
  // console.log(event);
  // loop over every image
  sliderImages.forEach(sliderImage => {
    // this finds halfway through the image

    // bottom of the image
    // const imageBottom;
    // declare a variable to hold value for whether the image is 'halfway' visible
    // const isHalfShown;
    // make sure we are not scrolled all the way past the image

    // check to see if image is 'half shown' and 'is not scrolled past'
  })
}

// window.addEventListener('scroll', debounce(checkSlide));
