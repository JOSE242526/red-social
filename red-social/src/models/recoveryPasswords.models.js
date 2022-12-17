const {DataTypes} = require('sequelize')
const Users = require('./users.models')
const db = require('../utils/database')

const RecoveryPassword = db.define('recovery_passwords',{
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    userId : {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Users,
            key: 'id'
        }
    },
    used: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
})

module.exports = RecoveryPassword