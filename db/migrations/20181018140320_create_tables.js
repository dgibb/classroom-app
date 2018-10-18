
exports.up = function (knex, Promise) {
  return knex.schema.createTable('classes', function (table) {
    table.increments()
    table.integer('room_number')
  })
    .createTable('students', function (table) {
      table.increments()
      table.string('first_name').notNullable()
      table.string('last_name').notNullable()
      table.integer('class_id').references('id').inTable('classes')
    })
    .createTable('teachers', function (table) {
      table.increments()
      table.string('first_name').notNullable()
      table.string('last_name').notNullable()
      table.integer('class_id').references('id').inTable('classes')
    })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('students').dropTable('classes').dropTable('teachers')
}
