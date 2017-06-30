const express = require('express')
const next = require('next')
const bodyParser  = require('body-parser')
const cookieParser = require('cookie-parser')
const {parse}  = require('url')
const { join } = require('path')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()
  server.use(cookieParser())
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));

  // A simple route to set a httpOnly cookie with the
  // session id for the API. Otherwise we can't get the
  // session ID when getInitialProps is called via server.
  server.post('/session', (req, res) => {
    const sessionId = req.body.sessionId
    res.cookie('artefact.sid', sessionId, { maxAge: 28908000000, httpOnly: true });
    return res.status(200).json({message: "Cookie created with session id: " + sessionId});
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })


  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
