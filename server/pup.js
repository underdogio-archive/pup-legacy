const docs = require('./routes/docs');
const express = require('express');
const path = require('path');
const {renderFile} = require('swig');

module.exports = function configureApp (cb) {
  const app = express();

  // Use swig for view engine
  app.engine('html', renderFile);
  app.set('view engine', 'html');
  app.set('views', path.join(__dirname, 'views'));

  // Enable view cache
  app.enable('view cache');

  // Serve static assets
  app.use(
    express.static(
      path.join(__dirname, '..', 'dist')
    )
  );

  app.get('/', (req, res) => {
    res.render('index');
  });

  // Serve docs
  docs((error, docsRoute) => {
    if (error) {
      return cb(error);
    }

    app.get('/:filename', docsRoute);
    cb(null, app);
  });
}
