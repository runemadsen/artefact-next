const squel = require("squel").useFlavour('postgres');
const db = require('pg-query');
db.connectionParameters = process.env.DATABASE_URL;

class Database {

  static find(table, attr, cb) {

    opts = attr.opts || {};
    delete attr.opts;

    var query = squel.select().from(table);
    _.each(attrs, function(v, k) {
      if(_.isArray(v)) {
        query = query.where(k + ' IN ?', v);
      }
      else {
        query = query.where(k + ' = ?', v);
      }
    });

    if(opts.limit) query = query.limit(opt.limit)

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
