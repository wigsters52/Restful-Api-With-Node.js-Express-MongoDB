const express = require('express')
const app = express()
const mongoose = require('mongoose')

require('dotenv/config')

// Middlewares

// app.use('/posts', () => {
//   console.log('This is a middleware running!')
// })

// import routes
const postsRoute = require('./routes/posts')

app.use('/posts', postsRoute)
// app.use('/user', userRoute)

// routes
app.get('/', (req, res) => {
  res.send('We are home!')
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
