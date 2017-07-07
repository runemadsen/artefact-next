const routes = module.exports = require('next-routes')()

// This file only has route information for the routes that need
// dynamic parameters. Everything else falls back to the default
// Next routing behavior based on /pages.
routes
  .add('Work', '/works/:id', 'work')
