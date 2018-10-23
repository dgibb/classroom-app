const knex = require('../db/knex')

class Students {
  constructor () {
    this.myvar = true
  }

  getAllStudents (req, res) {
    knex.raw('select * from students order by first_name asc').then((students) => {
      res.send(students)
    })
  }

  createNewStudent (req, res) {
    try {
      knex('students').insert(req.body).returning('id').then(id => {
        res.send(id)
      })
    } catch (err) {
      res.send(false)
      console.log(err.message)
    }
  }

  deleteStudent (req, res) {
    try {
      knex('students').where({ id: req.body.id }).del().then(() => {
        res.send(true)
      })
    } catch (err) {
      console.log(err.message)
    }
  }

  updateStudent (req, res) {
    try {
      knex('students').where('id', req.body.id).update(
        {
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          class_id: req.body.class_id
        }
      )
        .then(() => {
          res.send(true)
        })
    } catch (err) {
      console.log(err.message)
    }
  }
}

module.exports = Students
