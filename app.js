const express = require('express');
const app = express();
const router = require('./routers');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('connect-flash');
require('dotenv').config();

const port = process.env.PORT || 5501;

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
  }))
app.use(flash());

app.use((req, res, next) => {
  if (!req.session.login) {
    req.session.login = false;
  }
  res.locals.login = req.session.login;
  res.locals.msg = req.flash('msg');

  next()
})

app.use(express.static(__dirname + '/public'));

app.use(router)
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});



