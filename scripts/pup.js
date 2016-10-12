function polyfillClosest () {
  // element-closest | CC0-1.0 | github.com/jonathantneal/closest
  if (typeof Element.prototype.matches !== 'function') {
  	Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.webkitMatchesSelector || function matches(selector) {
  		var element = this;
  		var elements = (element.document || element.ownerDocument).querySelectorAll(selector);
  		var index = 0;

  		while (elements[index] && elements[index] !== element) {
  			++index;
  		}

  		return Boolean(elements[index]);
  	};
  }

  if (typeof Element.prototype.closest !== 'function') {
  	Element.prototype.closest = function closest(selector) {
  		var element = this;

  		while (element && element.nodeType === 1) {
  			if (element.matches(selector)) {
  				return element;
  			}

  			element = element.parentNode;
  		}

  		return null;
  	};
  }
}


function classToggle (element) {
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

(function () {
  polyfillClosest();
  [].forEach.call(document.querySelectorAll('.js-class-toggle'), classToggle);
}());
