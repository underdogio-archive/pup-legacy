const glob = require('glob');
const {map} = require('async');
const path = require('path');
const {readFile} = require('fs');

function docsRoute (req, res, next) {
  res.send('hai');
}

module.exports = function configureDocsRoute (cb) {
  glob(path.join(__dirname, '..', '..', 'docs', '**/*.md'), (globError, filePaths) => {
    const files = {};
    filePaths.forEach(filePath => {
      files[path.basename(filePath, '.md')] = null;
    });

    map(filePaths, (filePath, mapCb) => {
      readFile(filePath, (readFileError, fileContents) => {
        if (readFileError) {
          return mapCb(readFileError);
        }
        files[path.basename(filePath, '.md')] = fileContents.toString();
        mapCb(null, files[path]);
      });
    }, (readFilesError) => {
      if (readFilesError) {
        return cb(readFilesError);
      }

      cb(null, (req, res, next) => {
        const {filename} = req.params;
        const content = files[filename];

        if (!content) {
          return res.sendStatus(404);
        }

        res.render('doc', {
          content
        })
      });
    });
  });
}
