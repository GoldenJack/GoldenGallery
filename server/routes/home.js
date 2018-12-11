module.exports = function(app, db) {
  app.get('/api/home', (req, res) => {
    // Здесь будем создавать заметку.
    res.send('Hello home')
  });
};