const express = require('express')
const mysql = require('promise-mysql')


const app = express()
const port = 8000
app.use(express.json())

// app.get('/profile/:id', async (req, res) => {
//     // res.send('Hello super lynx')
//     const connection = await mysql.createConnection({
//         user: 'root',
//         password: 'password',
//         database: 'social-app'
//     })
//     //get infor using specific id
//     //get username, bio from users
// // and display content, user-id, date-time from posts
//     const id = req.params.id
//     const users = await connection.query('SELECT `username`, `bio`, `user-following`.`following-id`, `posts`.`content` FROM `users`\n' +
//         '\tLEFT JOIN `user-following`\n' +
//         '\t\tON `users`.`id` = `user-following`.`user-id`\n' +
//         '\tLEFT JOIN `posts`\n' +
//         '\t\tON `users`.`id` = `posts`.`user-id`\n' +
//         '\tWHERE `users`.`id` = 1')
//     res.json(users)
//     console.log(users)
// })

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

    console.log(username)
    console.log(bio)
    console.log(email)
    console.log(password)


    // const newUser = {
    //     username: req.body.username,
    //     bio: req.body.bio,
    //     email: req.body.email,
    //     password: req.body.password
    // }
    const result = await connection.query("INSERT INTO users (username, bio, email, password) VALUES ('"+ ${username} +"','"+ ${bio} +"', '" + ${email} + "','" + ${password} + "');")
    // if (result){
    //     res.json({success: true, data:result})
    //     console.log('itemadded')
    // } else {
    //     res.json({success: false, data:result})
    //     console.log('itemnotadded')
    // }


})


// The app.listen() function is used to bind and listen the
// connections on the specified host and port.
app.listen(port)