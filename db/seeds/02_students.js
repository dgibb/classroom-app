
exports.seed = function (knex, Promise) {
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        { id: 1, first_name: 'Harry', last_name: 'Jackson', class_id: 1 },
        { id: 2, first_name: 'Kathy', last_name: 'Freidman', class_id: 1 },
        { id: 3, first_name: 'Frank', last_name: 'Sherman', class_id: 1 },
        { id: 4, first_name: 'Betty', last_name: 'Leary', class_id: 1 },
        { id: 5, first_name: 'Kevin', last_name: 'Burns', class_id: 1 },
        { id: 6, first_name: 'Samantha', last_name: 'Gibson', class_id: 1 },
        { id: 7, first_name: 'Brandon', last_name: 'Murphy', class_id: 1 },
        { id: 8, first_name: 'Robert', last_name: 'Johnson', class_id: 1 },
        { id: 9, first_name: 'Alex', last_name: 'Sullivan', class_id: 1 },
        { id: 10, first_name: 'Bob', last_name: 'Barker', class_id: 1 },
        { id: 11, first_name: 'Donna', last_name: 'Reynolds', class_id: 1 },
        { id: 12, first_name: 'Mark', last_name: 'Maron', class_id: 1 },
        { id: 13, first_name: 'Bill', last_name: 'Simmons', class_id: 1 },
        { id: 14, first_name: 'Peter', last_name: 'Hare', class_id: 2 },
        { id: 15, first_name: 'Jennifer', last_name: 'Williams', class_id: 2 },
        { id: 16, first_name: 'Gary', last_name: 'Smith', class_id: 2 },
        { id: 17, first_name: 'Michelle', last_name: 'Miller', class_id: 2 },
        { id: 18, first_name: 'Kristen', last_name: 'Jones', class_id: 2 },
        { id: 19, first_name: 'Rachel', last_name: 'Wilson', class_id: 2 },
        { id: 20, first_name: 'Samuel', last_name: 'Brown', class_id: 2 },
        { id: 21, first_name: 'Grant', last_name: 'Beaner', class_id: 2 },
        { id: 22, first_name: 'Adam', last_name: 'Harris', class_id: 2 },
        { id: 23, first_name: 'David', last_name: 'Butler', class_id: 2 },
        { id: 24, first_name: 'Fred', last_name: 'Patterson', class_id: 3 },
        { id: 25, first_name: 'Janet', last_name: 'Ross', class_id: 3 },
        { id: 26, first_name: 'Jackson', last_name: 'Stewart', class_id: 3 },
        { id: 27, first_name: 'Jill', last_name: 'Ward', class_id: 3 },
        { id: 28, first_name: 'Hannah', last_name: 'Watson', class_id: 3 },
        { id: 29, first_name: 'Courtney', last_name: 'Foster', class_id: 3 },
        { id: 30, first_name: 'Elaine', last_name: 'Roberts', class_id: 3 },
        { id: 31, first_name: 'Jerry', last_name: 'Anderson', class_id: 3 },
        { id: 32, first_name: 'Phil', last_name: 'Richardson', class_id: 3 },
        { id: 33, first_name: 'Tom', last_name: 'Hayes', class_id: 3 },
        { id: 34, first_name: 'Gail', last_name: 'Hernandez', class_id: 3 },
        { id: 35, first_name: 'Deborah', last_name: 'Collins', class_id: 3 },
        { id: 36, first_name: 'Daniel', last_name: 'Shay', class_id: 3 }
      ])
    })
}
