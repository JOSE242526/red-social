const uuid = require('uuid')

const Posts = require('../models/posts.models')

const findAllPosts = async () => {
    const data = await Posts.findAll()
    return data
}

const findPostById = async (id) => {
    const data = await Posts.findOne({
        where: {
            id: id
        }
    })
    return data
}

const createPost = async (obj) => {
    const data = await Posts.create({
        id: uuid.v4(),
        userId: obj.userId,
        content: obj.content
    })
    return data
}

const updatePost = async(id, userId, obj) => {
    const data = await Posts.update(obj, {
        where: {
            id : id,
            userId: userId
        }
    })
    return data[0]
}

const removePost = async (id) => {
    const data = await Posts.destroy({
        where: {
            id: id
        }
    })
    return data
}




module.exports = {
    findAllPosts,
    findPostById, 
    createPost,
    updatePost,
    removePost

}