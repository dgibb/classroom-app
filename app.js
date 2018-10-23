require('dotenv').load();
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')
const knex = require('./db/knex')

const Api = require('./server/api')
const api = new Api()

const port = process.env.PORT || 3000

app.use(bodyParser.json())

app.use(express.static(path.resolve(__dirname, 'client')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'index.html'))
})

//Students
app.get('/students', api.students.getAllStudents)
app.post('/students/new', api.students.createNewStudent)
app.put('/students/update', api.students.updateStudent)
app.delete('/students/delete', api.students.deleteStudent)

// classes
app.get('/classes', api.classes.getAllClasses)

// teachers
app.get('/teachers', api.teachers.getAllTeachers)

app.listen(port, () => {
  console.log('app listening on port ', port)
})
