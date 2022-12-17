const {DataTypes} = require('sequelize')

const db = require('../utils/database')

const Users = db.define('users' ,{
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [2, 50]
        }
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len : [2, 50]
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        },
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    gender: {
        type: DataTypes.STRING,
    },
    birthday: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    nickName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,

    },
    profileImg: {
        type: DataTypes.STRING,
        validate: {
            isUrl: true
        }
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: 'normal'
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'active'
    },
    isVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
})

module.exports = Users