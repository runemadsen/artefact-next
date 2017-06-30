var path = require('path')
var postgrator = require('postgrator');

if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

postgrator.setConfig({
  migrationDirectory: path.join(__dirname, 'sql'),
  driver: 'pg',
  connectionString: process.env.DATABASE_URL
});

postgrator.migrate('max', function(err, migrations) {
  if(err)   console.log(err);
  postgrator.endConnection(function () {
    console.log('Done')
  });
});
