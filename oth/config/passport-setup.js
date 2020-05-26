const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('../config/keys');
const User = require('../models/user-model');

passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      callbackURL: '/auth/google/redirect',
      clientID: keys.google.CLIENT_ID,
      clientSecret: keys.google.CLIENT_SECRET,
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(profile);
      User.findOne({
        googleId: profile.id,
      }).then((currentUser) => {
        if (currentUser) {
          console.log('there is ' + currentUser);
          done(null, currentUser);
        } else {
          new User({
            userName: profile.displayName,
            googleId: profile.id,
          })
            .save()
            .then((newUser) => {
              console.log('name is ' + newUser);
              done(null, newUser);
            });
        }
      });
    }
  )
);
