module.exports = function(app, db) {
  app.get('/api/gallery', (req, res) => {
    // Здесь будем создавать заметку.
    res.send('Hello')
  });
};