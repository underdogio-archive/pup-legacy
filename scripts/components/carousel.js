// Load in dependencies
// SEE: https://github.com/nickleefly/swipe/blob/916d58d109aff461b060dfa969d5d017843668e5/README.md
var Swipe = require('swipe-js');

// Duration of slide transition in milliseconds
var CAROUSEL_SPEED = 500;

// Amount of time to display each slide in milliseconds
var CAROUSEL_SLIDE_DURATION = 10000;

var INDICATOR_CLASS = 'carousel__indicator';
var INDICATOR_ACTIVE_CLASS = 'carousel__indicator--active';

function updateStatusIndicator (indicators, currentSlideIndex) {
  // Get the currently active indicator
  var activeStatusIndicator = [].slice.call(indicators).filter(function filterActiveStatusIndicator (element) {
    return element.classList.contains(INDICATOR_ACTIVE_CLASS);
  })[0];

  // If there is currently an indicator with the active class, remove the active class
  if (activeStatusIndicator) {
    activeStatusIndicator.classList.remove(INDICATOR_ACTIVE_CLASS);
  }

  // Set the currently active slide indicator
  indicators[currentSlideIndex].classList.add(INDICATOR_ACTIVE_CLASS);
}

// Creates a carousel object from a DOM element.
// See docs/carousel.md for the required DOM structure.
function createCarousel (element) {
  var statusIndicators = element.getElementsByClassName(INDICATOR_CLASS);

  // Create a new carousel
  var carousel = Swipe(element, {
    auto: CAROUSEL_SLIDE_DURATION,
    callback: function (slideIndex) {
      // Update the current status indicator whenever the current slide changes
      updateStatusIndicator(statusIndicators, slideIndex);
    },
    speed: CAROUSEL_SPEED
  });

  // Helper for attaching a 'select' event listener to a carousel indicator
  function addIndicatorSelectEventListener (el, index) {
    function onIndicatorSelect (e) {
      // Update the current slide if clicked or if the enter key was pressed
      if (e.type === 'click' || (e.type === 'keydown' && e.key === 'Enter')) {
        e.preventDefault();

        // Remove focus from the clicked element
        el.blur();

        // Update the current slide
        carousel.slide(index);
      }
    }

    el.addEventListener('click', onIndicatorSelect);
    el.addEventListener('keydown', onIndicatorSelect);
  }

  // Attach listeners for handling click events on status indicators
  [].forEach.call(statusIndicators, addIndicatorSelectEventListener);

  // Update the currently active status indicator to be the first slide
  updateStatusIndicator(statusIndicators, 0);

  return carousel;
}

module.exports = function () {
  // Automatically create a carousel object for each carousel in the page
  [].forEach.call(document.getElementsByClassName('carousel'), createCarousel);
};
