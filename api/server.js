if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express');
const graphql = require('./graphql');
const compression = require('compression');
const passport = require('passport');
const Strategy = require('passport-local');
const bodyParser  = require('body-parser');
const session = require('express-session');
const methodOverride = require('method-override');
const db = require('./db');
const app = express();

const { Serialize, Deserialize, Verify, SignUp, SignIn, SignOut } = require('./users');

// Middleware
// ---------------------------------------------

app.use(compression())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// Auth
// ---------------------------------------------

// Use sessions
app.use(session({
  store: new (require('connect-pg-simple')(session))(),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 360 * 24 * 60 * 60 * 1000 }
}));

passport.use(new Strategy(Verify));
passport.serializeUser(Serialize);
passport.deserializeUser(Deserialize);
app.use(passport.initialize());
app.use(passport.session());

// API
// ---------------------------------------------

app.post('/users', SignUp);
app.post('/users/login', passport.authenticate('local'), SignIn);
app.post('/users/logout', SignOut);

app.use('/graphql', graphql);

app.listen(process.env.PORT || 4000);
