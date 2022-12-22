//? Dependencies
const express = require('express')
const cors = require('cors')
const swaggerUI = require('swagger-ui-express')

//? Files
const swaggerDoc = require('./swagger.json')
const config = require('../config')
const db = require('./utils/database')
const initModels = require('./models/initModels')
const userRouter = require('./users/users.router')
const authRouter = require('./auth/auth.router')
const postRouter = require('./posts/posts.router')
const followRouter = require('./follows/follows.router')

//? Initial Configs

const app = express()
//? Enable incoming JSON data
app.use(express.json())
//? Enable CORS 
app.use(cors())

//? Authenticate DB
db.authenticate()
    .then(() => console.log('Database Authenticated'))
    .catch((err) => console.log(err))
//? Sync DataBase Models
db.sync()
    .then(() => console.log('Database Synced'))
    .catch(err => console.log(err))

//? Initialize my models relations
initModels()

//? Routes v1
app.get('/', (req, res) => {
    res.status(200).json({
        status: 200,
        message: 'Ok!',
        routes: {
            users: ""
        }
    })
})

app.use('/api/v1/users', userRouter)
app.use('/api/v1/docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc))
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/posts', postRouter)
app.use('/api/v1/follower', followRouter)
app.use('/api/v1/follows', followRouter)

app.listen(config.api.port, () => {
    console.log(`Server started on ${config.api.host}`)
})