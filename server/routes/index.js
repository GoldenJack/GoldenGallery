const home  = require('./home');
const gallery = require('./gallery');

module.exports = {
  before(app, db){
    home(app, db);
    gallery(app, db);
  },

  after(app) {
    app.get('*', (req, res) => {
      // supports routes
      req.url = '../../src/index.html';
      // noinspection JSAccessibilityCheck
      app.handle(req, res);
    });
  }
};