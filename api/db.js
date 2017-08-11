import squelLib from 'squel';
import humps from 'humps';
const squel = squelLib.useFlavour('postgres');
import db from 'pg-query';
db.connectionParameters = process.env.DATABASE_URL;

async function find(table, attr) {

  const opts = attr.opts || {};
  delete attr.opts;

  attr = humps.decamelizeKeys(attr)

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
  const rows = humps.camelizeKeys(result[0]);
  return rows;
}

async function create(table, attr) {
  attr = humps.decamelizeKeys(attr);
  var query = squel.insert().into(table).setFields(attr).returning('*').toParam();
  const result = await db(query.text, query.values);
  const rows = humps.camelizeKeys(result[0]);
  return rows;
}

async function update(table, id, attr) {
  attr = humps.decamelizeKeys(attr);
  var query = squel.update().table(table).setFields(attr).where('id = ?', id).returning('*').toParam();
  const result = await db(query.text, query.values);
  const rows = humps.camelizeKeys(result[0]);
  return rows
}

export { find, create, update }
