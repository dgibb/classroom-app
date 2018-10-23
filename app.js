require('dotenv').load();
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')
const knex = require('./db/knex')

const port = process.env.PORT || 3000

app.use(bodyParser.json())

app.use(express.static(path.resolve(__dirname, 'client')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'index.html'))
})

app.get('/students', (req, res) => {
  knex.raw('select * from students').then((students) => {
    res.send(students)
  })
})
app.get('/classes', (req, res) => {
  knex.raw('select * from classes').then((classes) => {
    res.send(classes)
  })
})
app.get('/teachers', (req, res) => {
  knex.raw('select * from teachers').then((teachers) => {
    res.send(teachers)
  })
})

app.post('/students/new', (req, res) => {
  try {
    knex('students').insert(req.body).returning('id').then(id => {
      res.send(id)
    })
  } catch (err) {
    res.send(false)
    console.log(err.message)
  }
})

app.delete('/students/delete', (req, res) => {
  try {
    knex('students').where({id: req.body.id}).del().then(() => {
      res.send(true)
    })
  } catch (err) {
    console.log(err.message)
  }
})

app.put('/students/update', (req, res) => {
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
})

app.put('/students/update', (req, res) => {
  knex('students').where('id', req.body.id).update(
    {
      first_name: req.body.first_name
      last_name: req.body.last_name
      class_id: req.body.class_id
    }
  )
})

app.listen(port, () => {
  console.log('app listening on port ', port)
})
