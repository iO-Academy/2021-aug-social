const express = require('express')
const mysql = require('promise-mysql')


const app = express()
const port = 8000

app.get('/', async (req, res) => {
    // res.send('Hello super lynx')
    const connection = await mysql.createConnection({
        user: 'root',
        password: 'password',
        database: 'social-app'
    })

    const users = await connection.query('SELECT * FROM `users`;')

    res.json(users)
    console.log(users)
    // res.send(users)
})


// The app.listen() function is used to bind and listen the
// connections on the specified host and port.
app.listen(port)