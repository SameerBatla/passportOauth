const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('../config/keys');
passport.use(
  new GoogleStrategy(
    {
      callbackURL: '/auth/google/redirect',
      clientID: keys.google.CLIENT_ID,
      clientSecret: keys.google.CLIENT_SECRET,
    },
    (accessToken, refreshToken, profile, done) => {
      //safa
      console.log(profile);
    }
  )
);
