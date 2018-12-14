module.exports = function(app, db) {
  app.get('/api/gallery', (req, res) => {
    res.send('Hello')
  });
};