var _ = require('underscore');
var express = require('express');
var path = require('path');
var hbs = require('express-handlebars');
var loadContent = require('./lib/load-content');

var app = express();

// Helper function for setting the active section
function setActiveSection (sections, sectionSlug) {
  var activeSection = sections.filter(function findActiveSection (section) {
    var isCurrentSection = section.slug === sectionSlug;

    // Set isActive property on each section
    section.isActive = isCurrentSection;
    return isCurrentSection;
  })[0] || null;

  return activeSection;
}

// Export a function which takes a callback that is
// invoked once we are done setting up our app.
// The callback  is passed an error object if something
// goes wrong, or the app object once we are done
// setting everything up.
module.exports = function (cb) {
  app.engine('hbs', hbs({
    layoutsDir: path.join(__dirname, 'views/layouts'),
    partialsDir: path.join(__dirname, 'views/partials'),
    defaultLayout: 'main',
    extname: '.hbs'
  }));

  app.set('view engine', 'hbs');
  app.set('views', path.join(__dirname, 'views'));
  app.use(
    express.static(path.join(__dirname, '..', 'dist'))
  );

  // Load the sections for the styleguide
  loadContent(path.join(__dirname, '..', 'docs/**/*.md'), function (error, categories) {
    if (error) {
      // If there was an error, pass it along to the callback function
      return cb(error);
    }

    var sections = _.flatten(categories.map(function mapCategoryToSections (category) {
      return category.sections;
    }));

    // Hook up our routes
    app.get('/', function (req, res) {
      setActiveSection(sections);

      // Pass along the sections to our template
      return res.render('styleguide', {
        categories: categories
      });
    });

    app.get('/:section_slug', function (req, res) {
      var sectionSlug = req.params.section_slug;

      // Find a section that has a matching slug
      var currentSection = setActiveSection(sections, sectionSlug);

      if (!currentSection) {
        // Render the not-found template if no section with a matching slug was found
        return res.status(404).render('not-found', {
          categories: categories
        });
      }

      return res.render('styleguide', {
        categories: categories,
        currentSection: currentSection
      });
    });

    // Render not-found template for non-existent routes
     app.use(function (req, res, next) {
      res.status(404).render('not-found', {
        categories: categories
      });
    });

    // Pass our app object to the callback function
    cb(null, app);
  });
};
