const express = require('express') // import express

const bookRoutes = require('./routes/book') // import book routes

const app = express() // instance express

app.use('/books', bookRoutes) // define root route

const port = 8000 // define port

app.listen(port, () => { // define port to listen
  console.log(`Escutando a porta ${port}`) // log message
})