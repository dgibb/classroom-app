const knex = require('../db/knex')

class Classes {
  getAllClasses (req, res) {
    knex.raw('select * from classes').then((classes) => {
      res.send(classes)
    })
  }
}

module.exports = Classes
