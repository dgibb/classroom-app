const Students = require('./students')
const Classes = require('./classes')
const Teachers = require('./teachers')

class Api {
  constructor () {
    this.students = new Students()
    this.teachers = new Teachers()
    this.classes = new Classes()
  }
}

module.exports = Api
