const express = require('express');
const myRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const app = express();

//view engine
app.set('view engine', 'ejs');
//mongo connect

mongoose.connect(keys.mongodb.DB_URI, {
  useUnifiedTopology: true,
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
console.log('connected too mongodb');

//set up routes
app.use('/auth', myRoutes);

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(3000, () => console.log('listening on port 3000'));
