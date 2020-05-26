const express = require('express');
const myRoutes =require('./routes/auth-routes')
const passportSetup = require('./config/passport-setup')
const app = express();
//view engine
app.set('view engine', 'ejs');
//set up routes
app.use('/auth',myRoutes)


app.get('/', (req, res) => {
  res.render('home');
});

app.listen(3000, () => console.log('listening on port 3000'));
