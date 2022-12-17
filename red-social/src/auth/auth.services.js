const jwt = require('jsonwebtoken')

const authControllers = require('./auth.controllers')
const jwtSecret = require('../../config').api.jwtSecret
const mailer = require('../utils/mailer')
const config = require('../../config')

const postLogin = (req, res) => {
    const {email, password} = req.body

    if(email && password){
        authControllers.checkUsersCredentials(email, password)
            .then((data) => {
                if(data){
                    const token = jwt.sign({
                        id: data.id,
                        email: data.email,
                        role: data.role
                    }, jwtSecret)

                    res.status(200).json({
                        message: 'Correct Credentials!',
                        token
                    })
                } else {
                    res.status(401).json({message: 'Invalid Credentials'})
                }
            })
            .catch((err) => {
                res.status(400).json({message: err.message})
            })
    } else {
        res.status(400).json({message: 'Missing Data', fields: {
            email: 'example@example.com',
            password: "string"
        }})
    }
}

const postRecoveryToken = (req, res) => {

    const { email } = req.body
    authControllers.createRecoveryToken(email)
        .then((data) => {
            if(data){
                mailer.sendMail({
                    from: '<test.academlo@gmail.com>',
                    to: email,
                    subject: 'Recuperación de Contraseña',
                    html: `<a href='${config.api.host}/api/v1/auth/recovery-password/${data.id}'>Recuperar contraseña</a>`
                })
            }
            res.status(200).json({message: 'Email sended!, Check your inbox'})
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
}









module.exports = {
    postLogin,
    postRecoveryToken
}
