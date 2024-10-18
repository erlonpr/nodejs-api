const { Router } = require('express'); // import router from express

const router = Router() // instance router

router.get('/', (req, res) => { // define root route with GET method
  res.send('GET method') // send response
})

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