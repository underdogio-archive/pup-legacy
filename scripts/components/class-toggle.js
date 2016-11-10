function createClassToggle (element) {
  var targetSelector = element.dataset.target;
  var target = document.querySelector(targetSelector);

  if (!target) {
    return false;
  }

  var classToToggle = element.dataset.class;

  document.addEventListener('click', function (e) {
    var eventTarget = e.target;

    // Check if an element with the js-class-toggle class was clicked
    var clickedElement;
    if (eventTarget.classList.contains('js-class-toggle')) {
      clickedElement = eventTarget;
    } else {
      // Check if the clicked element is a child of a toggle element
      // closest will return null if no parent element is found
      clickedElement = eventTarget.closest('.js-class-toggle');
    }

    // Check if the element that was clicked has the same target as element
    var didMatchTarget = clickedElement && clickedElement.dataset.target === targetSelector;

    // Toggle class on target element if targets match up
    if (didMatchTarget) {
      e.preventDefault();
      target.classList.toggle(classToToggle);
    }
  });
}

module.exports = function initClassToggle () {
  [].forEach.call(document.querySelectorAll('.js-class-toggle'), createClassToggle);
};
