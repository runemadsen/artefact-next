const squel = require("squel").useFlavour('postgres');
const db = require('pg-query');
db.connectionParameters = process.env.DATABASE_URL;

class Database {

  static find(table, attr, cb) {

    const opts = attr.opts || {};
    delete attr.opts;

    var query = squel.select().from(table);

    Object.keys(attr).forEach(function(key) {
      var value = attr[key];
      if(Array.isArray(value)) {
        query = query.where(key + ' IN ?', value);
      }
      else {
        query = query.where(key + ' = ?', value);
      }
    });

    if(opts.limit) query = query.limit(opts.limit)

    query = query.toParam();

    db(query.text, query.values, function(err, rows) {

      if(err) {
        return cb(err, null);
      }
      else {
        cb(null, rows);
      }

    });
  }

  static create(table, attr, cb) {
    var query = squel.insert().into(table).setFields(attr).returning('*').toParam();
    db(query.text, query.values, function(err, rows) {

      if(err) {
        return cb(err, null);
      }
      else {
        cb(null, rows);
      }

    });
  }

}

module.exports = Database;
