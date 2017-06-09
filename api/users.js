const db = require('./db');
const auth = require('passport-local-authenticate');

function HashOptions() {
  return {
    saltlen: 32,
    keylen: 512,
    iterations: parseInt(process.env.HASH_ITERATIONS) || 25000,
    encoding: 'hex'
  }
}

function Serialize(user, cb) {
  cb(null, user.id);
}

function Deserialize(id, cb) {
  db.find('users', { id:id, opts:{ limit:1} }, function (err, rows) {
    if(err) { return cb(err); }
    cb(null, rows[0]);
  });
}

function Verify(username, password, cb) {

  db.find('users', { username:username, opts:{ limit: 1 } }, function(err, rows) {

    // if there was an error
    if(err) { return cb(err, false); }

    // if there was no user
    if (!rows || !rows[0]) { return cb(null, false, {message: "User does not exist"}); }

    var user = rows[0];

    // verify password with user salt and hash
    var hashed = { hash: user.password_hash, salt: user.password_salt };
    auth.verify(password, hashed, HashOptions(), function(err, verified) {

      // if there was a error comparing hashes
      if(err) { return cb(err, false) };

      // otherwise check for match
      if (!verified) { return cb(null, false, {message: "Incorrect password"}); }

      // correct user and hash
      else {return cb(null, user); }
    });
  });
};

function SignUp(req, res) {

  db.create('users', req.body.user, function(e, rows) {
    if(e || !rows) {
      return res.status(500).json({message: "Could not create user"});
    }
    req.login(rows[0], function(e) {
      if(e) {
        return res.status(500).json({message: "Could not login user"});
      }
      return res.status(201).json({message: "User created"});
    });
  });

}

function SignIn(req, res) {
  // Authentication happens in the passport.authenticate middleware handler
  // set up in server.js
  return res.status(200).json({message: "User logged in"});
}

function SignOut(req, res) {
  req.logout();
  return res.status(200).json({message: "User logged out"});
}

module.exports.Serialize = Serialize;
module.exports.Deserialize = Deserialize;
module.exports.Verify = Verify;
module.exports.SignUp = SignUp;
module.exports.SignIn = SignIn;
module.exports.SignOut = SignOut;
