const { DataTypes } = require('sequelize')
const db = require('../utils/database')
const Users = require('./users.models')

const Follows = db.define('follows', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    userId: {
        type: DataTypes.UUID,
        reference: {
            key: 'id',
            model: Users
        },
        comment: 'Follower'
    },
    userId2: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'followed',
        comment: 'Followed',
        reference: {
            key: 'id',
            model: Users
        },
    }
},
{
//? Validacion para evitar seguir a una persona 2 veces
    // uniqueKeys: {
    //     follows_unique: {
    //         fields: ['userId', 'userId2']
    //  
})

module.exports = Follows