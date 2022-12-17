const { DataTypes } = require('sequelize')

const db = require('../utils/database')
const Users = require('./users.models')
const Posts = require('./posts.models')

const Likes = db.define('likes', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            key: 'id',
            model: Users
        }
    },
    postId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            key: 'id',
            model: Posts
        }
    }
})

module.exports = Likes
