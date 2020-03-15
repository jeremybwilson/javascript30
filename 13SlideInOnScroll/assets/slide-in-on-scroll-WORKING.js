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
const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(event){
  // console.log(event);
  // loop over every image
  sliderImages.forEach(sliderImage => {
    // this finds halfway through the image
    const slideInAt = (window.scrollY + window.innerHeight) - (sliderImage.height / 2);
    // bottom of the image
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    // declare a variable to hold value for whether the image is 'halfway' visible
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    // make sure we are not scrolled all the way past the image
    const isNotScrolledPast = window.scrollY < imageBottom;
    if (isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add('active');
    } else {
      sliderImage.classList.remove('active');
    }
  })
}

// window.addEventListener('scroll', checkSlide);
window.addEventListener('scroll', debounce(checkSlide));
