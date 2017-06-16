if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config({ path: '../.env' })
}

const express = require('express');
const graphql = require('./graphql');
const compression = require('compression');
const passport = require('passport');
const Strategy = require('passport-local');
const bodyParser  = require('body-parser');
const session = require('express-session');
const methodOverride = require('method-override');
const cors = require('cors');
const db = require('./db');
const app = express();

const { Serialize, Deserialize, Verify, SignUp, SignIn, SignOut } = require('./users');

// Middleware
// ---------------------------------------------

app.use(compression())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(cors({
  origin: true,
  credentials: true
}))

// Auth
// ---------------------------------------------

// Use sessions
app.use(session({
  name: 'artefact.sid',
  store: new (require('connect-pg-simple')(session))(),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 28908000000 }
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

// Enable OPTIONS requests for graphql
app.use("/graphql", function (req, res, next) {
  if(req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});
app.use('/graphql', graphql);

app.listen(process.env.PORT || 4000);
