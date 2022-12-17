require('dotenv').config()

module.exports = {
    api: {
        //! port: process.env.PORT ? process.env.PORT : 3000,
        port: process.env.PORT || 3000,
        host: process.env.HOST || 'http://localhost:3000/',
        jwtSecret: process.env.JWT_SECRET,
        emailPass: process.env.MAIL_PASS,
        mailer: process.env.MAILER
    },
    db: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        pass: process.env.DB_PASSWORD,
        name: process.env.DB_NAME,
        port: process.env.DB_PORT
    }
}

