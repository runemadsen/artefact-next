if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config({ path: '../.env' })
}

module.exports = {
  'API_BASE_URL': process.env.API_BASE_URL
}
