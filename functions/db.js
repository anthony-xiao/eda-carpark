const knex = require('knex')
const config = require('../knexfile').development

const db = knex(config)

module.exports = {
  show,
  findPark
}

function show () {
  return db('carpark')
    .select()
}

function findPark (id) {
  return db('carpark')
    .where('id', id)
    .select()
}
