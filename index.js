const express = require('express')
const mysql = require('promise-mysql')

const app = express()
const port = 8000
app.use(express.json())

app.get('/profile/:id', async (req,res) => {
    const connection = await mysql.createConnection({
        user: 'root',
        password: 'password',
        database: 'social-app'
    })

    const userInfo = await connection.query("SELECT `id`, `username`, `bio` FROM `users` WHERE `id` = '" + req.params.id + "'")
    const posts = await connection.query(" SELECT `posts`.`content` FROM `users` LEFT JOIN `posts` ON `users`.`id` = `posts`.`user-id` WHERE `users`.`id` = '" + req.params.id + "'")
    res.json({posts: posts, userInfo: userInfo})
})

// foreach over all the following ID's, then put them into profile root to get name.
app.get('/following/:id', async (req,res) => {
    const connection = await mysql.createConnection({
        user: 'root',
        password: 'password',
        database: 'social-app'
    })
    const following = await connection.query("SELECT `user-following`.`following-id` FROM `users` LEFT JOIN `user-following` ON `users`.`id` = `user-following`.`user-id` WHERE `users`.`id` = '" + req.params.id + "'")
    res.json({following: following})
})

app.post('/signUp', async (req,res) => {
    let {username, bio, email, password} = req.body

    const connection = await mysql.createConnection({
        user: 'root',
        password: 'password',
        database: 'social-app'
    })

    const result = await connection.query("INSERT INTO users (username, bio, email, password) VALUES ('" + username + "', '" + bio + "', '" + email + "', '" + password + "' )")
    if (result){
        res.json({success: true, data:result})
        console.log('item added')
    } else {
        res.json({success: false, data:result})
        console.log('item not added')
    }
})



// The app.listen() function is used to bind and listen the
// connections on the specified host and port.
app.listen(port)