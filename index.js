const express = require('express')

const app = express()
const PORT = process.env.PORT

// call the createPlan function with request params
// and return the response
app.get('/api/plan', (request, response) => {
    response.send(JSON.stringify({ data: "hello world" }))
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})