import express from 'express';
import graphql from './graphql/index';
import compression from 'compression';
import passport from 'passport';
import Strategy from 'passport-local';
import bodyParser  from 'body-parser';
import session from 'express-session';
import methodOverride from 'method-override';
import cors from 'cors';
import {
  Serialize,
  Deserialize,
  Verify,
  SignUp,
  SignIn,
  SignOut
} from './users';

const app = express();
const port = process.env.PORT || 4000;

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

// If sessionId is provided in header (it came from next server via client cookie)
// add it to the cookies for the req. We might need to not override this if there
// are other cookies.
app.use(function(req, res, next) {
  const sessionIdHeader = req.get('X-Session-Id');
  if(sessionIdHeader) {
    req.headers.cookie = 'artefact.sid='+ sessionIdHeader
  }
  next();
});

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

app.listen(port);

console.log('API ready on localhost:' + port)
