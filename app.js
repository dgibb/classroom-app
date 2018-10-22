require('dotenv').load();
const express = require('express')
const app = express()
const path = require('path')
const knex = require('./db/knex')

const port = process.env.PORT || 3000

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

app.listen(port, () => {
  console.log('app listening on port ', port)
})
