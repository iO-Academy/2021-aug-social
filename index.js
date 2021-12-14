const express = require('express')

const app = express()
const port = 8000

app.get('/', (req, res) => {
    res.send('Hello super lynx')
})
// The app.listen() function is used to bind and listen the
// connections on the specified host and port.
app.listen(port)