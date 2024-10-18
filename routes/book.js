const { Router } = require('express'); // import router from express

const router = Router() // instance router

router.get('/', (req, res) => { // define root route with GET method
  try {

    throw new Error('Test error') // throw error simulation

    /*
      Due to the error being thrown 
        throw new Error('Test error')
      the line 
        res.send('GET method')
      will never be executed, because the error stops execution before that line
    */

    res.send('GET method') // send response, case success (status code 200 - ok)    
  
  } catch (error) {
    
    /*
      The catch receives the error object as an argument, usually named error, 
      but can be named differently, such as: err, e
    */

    res.status(500) // send response, case error (status code 500 - internal server error)    
    res.send(error.message)  
    
  }  
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
