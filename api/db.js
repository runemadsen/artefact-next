import squelLib from 'squel';
const squel = squelLib.useFlavour('postgres');
import db from 'pg-query';
db.connectionParameters = process.env.DATABASE_URL;

async function find(table, attr, cb) {

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

  const result = await db(query.text, query.values);

  return result[0];
}

async function create(table, attr, cb) {
  var query = squel.insert().into(table).setFields(attr).returning('*').toParam();
  const result = await db(query.text, query.values);
  return result[0]
}

export { find, create }
