const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/login', (req, res) => {
  res.render('login', { user: req.user });
});

router.get('/logout', (req, res) => {
  //will use passport
  // res.send('logging out');
  req.logOut();
  res.redirect('/');
});

router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile'],
  })
);

//redirect

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  // res.send(req)
  // res.send(req.user)
  res.redirect('/profile');
});

module.exports = router;
