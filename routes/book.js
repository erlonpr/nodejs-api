const { Router } = require('express'); // import router from express

const router = Router() // instance router

const { getBooks } = require('../controllers/book') // import controller which contains a function for the GET method

router.get('/', getBooks) // define root route with GET method

router.post('/', (req, res) => { // define root route with POST method
  res.send('POST method') // send response
})

router.patch('/', (req, res) => { // define root route with PATCH method
  res.send('PATCH method') // send response
})

router.delete('/', (req, res) => { // define root route with DELETE method
  res.send('DELETE method') // send response
})

module.exports = router // export router  
