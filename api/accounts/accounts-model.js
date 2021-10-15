/*
db('foo-table') // returns a promise that resolves to an **array** with all records in the table

db('foo-table').where({ role: 'Student', active: true }) // resolves to an **array** of all records that satisfy the where

db('foo-table').where('name', 'Mary') // is an alternative for when there is just one where condition

db('foo-table').where('id', 7).first() // will resolve to the **record** we want (if the id is unique for a table) or undefined

db('foo-table').insert({ bar: 'baz' }) // resolves to an **array** containing the **ids of the records** inserted into the table

db('foo-table').where('id', id).update({ bar: 'new bar' }) // resolves to the **number of records** affected by the update

db('foo-table').where('id', id).delete() // resolves to the **number of records** affected by the delete
*/

const db = require('../../data/db-config');

async function getAll() {
  return db('accounts');
}

async function getById(id) {
  return db('accounts').where({ id }).first();
}

async function create(account) {
  const [id] = await db('accounts').insert(account);
  return db('accounts').where({ id }).first();
}

async function updateById(id, account) {
  await db('accounts').where({ id }).update(account);
  return db('accounts').where({ id });
}

async function deleteById(id) {
  // DO YOUR MAGIC
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
