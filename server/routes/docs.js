const path = require('path');
const {readFile} = require('fs');

module.exports = function docsRoute (req, res, next) {
  console.log('got request!');
  const {filename} = req.params;
  const filePath = path.join(__dirname, '..', '..', 'docs', `${filename}.md`);

  // Open file.
  readFile(filePath, (error, data) => {
    if (error) {
      return res.sendStatus(404);
    }

    res.render('doc', {
      content: data.toString()
    });
  });
};
