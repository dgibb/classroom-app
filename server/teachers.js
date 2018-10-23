const knex = require('../db/knex')

class Teachers {
  getAllTeachers (req, res) {
    knex.raw('select * from teachers').then((teachers) => {
      res.send(teachers)
    })
  }
}

module.exports = Teachers
