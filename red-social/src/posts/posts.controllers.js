const uuid = require('sequelize')

const Posts = require('../models/posts.models')
const Users = require('../models/users.models')

const findAllPosts = async () =>{
    const data = await Posts.findAll()
    return data
}

const findPostsById = async (id) => {
    const data = await Posts.findOne({
        where: {
            id: id
        }
    })
    return data
}

const createPosts = async (obj) =>{
    const data = await Posts.create({
        id: uuid.v4(),
        userId: obj.userId,
        content: obj.content
    })
    return data
}

const updatePosts = async (id, userId, obj) =>{
    const data = await Users.update(obj, {
        where: {
            id: id,
            userId: userId
        }
    })
    return data[0]
}

const removePosts = async (id, userId) =>{
    const data = await Posts.destroy({
        where: {
            id: id,
            userId: userId
        }  
    })
    return data
}

module.exports = {
    findAllPosts,
    findPostsById,
    createPosts,
    updatePosts,
    removePosts
}