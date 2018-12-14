const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const db             = require('./config');
const routes         = require('./routes');
const app            = express();
const port = 3000;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));

routes.before(app);

MongoClient.connect(db.url, {useNewUrlParser: true}, (err, database) => {
  if (err) return console.log(err)
  routes.after(app, database);
  app.listen(port, () => {
    console.log('We are live on ' + port);
  });               
})