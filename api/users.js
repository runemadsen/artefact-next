import { find, create } from './db';
import auth  from 'passport-local-authenticate';
import signature from 'cookie-signature';

function signSessionId(sid) {
  return 's:' + signature.sign(sid, process.env.SESSION_SECRET);
}

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

  find('users', { id:id, opts:{ limit:1} })
    .catch((err) => {
      cb(err, null)
    })
    .then((rows) => {
      cb(null, rows[0])
    })
}

function Verify(username, password, cb) {

  find('users', { username:username, opts:{ limit: 1 } })
    .catch((err) => cb(err, false))
    .then((rows) => {

      // if there was no user
      if (!rows || !rows[0]) { return cb(null, false, {message: "User does not exist"}); }

      var user = rows[0];

      // verify password with user salt and hash
      var hashed = { hash: user.passwordHash, salt: user.passwordSalt };
      auth.verify(password, hashed, HashOptions(), function(err, verified) {

        // if there was a error comparing hashes
        if(err) { return cb(err, false) };

        // otherwise check for match
        if (!verified) { return cb(null, false, {message: "Incorrect password"}); }

        // correct user and hash
        else {return cb(null, user); }
      });

    })
}

function SignUp(req, res) {

  var attrs = req.body.user;
  if(!attrs || !attrs.username || !attrs.email || !attrs.password) {
    return res.status(406).json({message: "One or more fields are empty"});
  }

  auth.hash(attrs.password, HashOptions(), function(err, hashed) {

    if(err) return res.status(500).json({message: "Something went wrong"});

    delete attrs.password;
    attrs.passwordHash = hashed.hash;
    attrs.passwordSalt = hashed.salt;

    create('users', attrs)
      .catch((err) => {
        console.log(err)
        res.status(500).json({message: "Could not create user"});
      })
      .then((rows) => {

        if(!rows) return res.status(500).json({message: "Could not login user"});

        req.login(rows[0], function(e) {

          if(e) {
            return res.status(500).json({message: "Could not login user"});
          }

          // Because of a pretty stupid way of writing express-session, there's
          // no way of getting to the signed session. So hey, let's do it again
          // so the client can set a cookie for next.js too.
          return res.status(201).json({
            data: {
              sessionId: signSessionId(req.sessionID)
            },
            message: "User created"
          });
        });

      })

  });
}

function SignIn(req, res) {
  return res.status(200).json({
    data: {
      sessionId: signSessionId(req.sessionID)
    },
    message: "User logged in"
  });
}

function SignOut(req, res) {
  req.session.destroy(function(err) {
    res.status(200).json({message: "User logged out"});
  });
}

export { Serialize,  Deserialize, Verify, SignUp, SignIn, SignOut }
