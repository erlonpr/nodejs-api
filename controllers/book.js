function getBooks(req, res) { // function to get books
    
    try {

        // induces the error
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
}

module.exports = { getBooks } // export functions to be used in other files