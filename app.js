require('dotenv').load();
const express = require('express')
const app = express()
const path = require('path')

const port = process.env.PORT || 3000

app.use(express.static(path.resolve(__dirname, 'client')))

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'index.html'))
})

app.listen(port)

console.log('app listening on port ', port)
