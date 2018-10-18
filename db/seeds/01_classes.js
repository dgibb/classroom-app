
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('classes').del()
    .then(function () {
      // Inserts seed entries
      return knex('classes').insert([
        { id: 1, room_number: 101 },
        { id: 2, room_number: 102 },
        { id: 3, room_number: 201 }
      ])
    })
}
