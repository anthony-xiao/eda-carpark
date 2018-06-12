exports.up = (knex, Promise) => {
  return knex.schema.createTable('carpark', table => {
    table.increments('id')
    table.string('name')
    table.string('rego')
    table.string('mobile')
    table.boolean('parked')
    table.boolean('blocked')
    table.string('comments')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('carpark')
}
