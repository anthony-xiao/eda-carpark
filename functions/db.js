const knex = require('knex')
const config = require('../knexfile').development

const db = knex(config)

module.exports = {
  show,
  findPark,
  updatePark
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

function updatePark (id, data) {
  return db('carpark')
    .where('id', id)
    .update({
      name: data.name,
      rego: data.rego,
      mobile: data.mobile,
      comments: data.comments
    })
}
