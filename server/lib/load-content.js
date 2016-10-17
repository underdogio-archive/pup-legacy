var fs = require('fs');
var glob = require('glob');
var async = require('async');
var slug = require('slug');
var markdown = require('meta-marked');

// Loads sections for the styleguide from
// the local filesystem.
module.exports = function(path, cb) {
  glob(path, function (er, filePaths) {
    if (er) {
      return cb(er);
    }

    // Read each file that we got from glob
    async.map(filePaths, fs.readFile, function (err, files) {
      if (err) {
        return cb(err);
      }

      // Parse sections from each file
      var sections = files.map(function(buffer) {
          // Convert file content into markdown
          return markdown(buffer.toString());
        }).filter(function(doc) {
          // Filter out docs that don't have valid metadata
          return doc.meta && doc.meta.title;
        }).map(function(doc) {
          return {
            // Slug is used in TOC
            slug: slug(doc.meta.title).toLowerCase(),
            subtitle: doc.meta.subtitle || null,
            title: doc.meta.title,
            category: doc.meta.category,
            content: doc.html
          };
        });

        // Group sections by category
        var categories = ['Base', 'Layout', 'Components'].map(function mapUniqCategoryToSections (category) {
          return {
            title: category,
            sections: sections.filter(function filterSectionsByCategory (section) {
              return section.category === category;
            })
          };
        });

        // Invoke callback with sections sorted by category
        cb(null, categories);
    });
  });
};
