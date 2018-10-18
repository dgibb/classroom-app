
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('teachers').del()
    .then(function () {
      // Inserts seed entries
      return knex('teachers').insert([
        { id: 1, first_name: 'Ian', last_name: 'Thompson', class_id: 1 },
        { id: 2, first_name: 'Lee', last_name: 'Walker', class_id: 2 },
        { id: 3, first_name: 'Josh', last_name: 'Lewis', class_id: 3 }
      ])
    })
}
