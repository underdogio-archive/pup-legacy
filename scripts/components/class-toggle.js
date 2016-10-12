function createClassToggle (element) {
  var target = document.querySelectorAll(element.dataset.target)[0];

  if (!target) {
    return false;
  }

  var classToToggle = element.dataset.class;

  document.addEventListener('click', function (e) {
    if (e.target.classList.contains('js-class-toggle') || e.target.closest('.js-class-toggle')) {
      e.preventDefault();
      target.classList.toggle(classToToggle);
    }
  });
}

module.exports = function initClassToggle () {
  [].forEach.call(document.querySelectorAll('.js-class-toggle'), createClassToggle);
};
