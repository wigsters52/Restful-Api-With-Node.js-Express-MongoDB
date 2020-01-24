const express = require('express')
const mongoose = require('mongoose')
const app = express()
require('dotenv/config')

// Middlewares

app.use('/posts', () => {
  console.log('This is a middleware running!')
})

// routes
app.get('/', (req, res) => {
  res.send('We are home!')
})

app.get('/posts', (req, res) => {
  res.send('We are on posts!')
})

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('Connected to DB!')
)
// Start listening to the server

app.listen(3000, () => {
  console.log('Server is running!')
})
