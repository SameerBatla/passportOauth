const express = require('express');
const myRoutes = require('./routes/auth-routes');
const profileRoutes = require('./routes/profile-router');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const app = express();

//view engine
app.set('view engine', 'ejs');
//mongo connect
app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());


mongoose.connect(keys.mongodb.DB_URI, {
  useUnifiedTopology: true,
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
console.log('connected too mongodb');

//set up routes
app.use('/auth', myRoutes);
app.use('/profile',profileRoutes)

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(3000, () => console.log('listening on port 3000'));
