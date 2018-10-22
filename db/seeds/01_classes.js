
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('classes').del()
    .then(function () {
      // Inserts seed entries
      return knex('classes').insert([
        { room_number: 101 },
        { room_number: 102 },
        { room_number: 201 }
      ])
    })
}
