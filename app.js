const express = require('express') // import express
const app = express() // instance express
const port = 8000 // define port

app.get('/', (req, res) => { // define root route
  res.send('Hello world!') // send response
})

app.listen(port, () => { // define port to listen
  console.log(`Escutando a porta ${port}`) // log message
})