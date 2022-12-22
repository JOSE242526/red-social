const Likes = require('../models/likes.models')
const uuid = require('uuid')
const Users = require('../models/users.models')

const findAllLikesFromPost = async (postId) => {
    const data = await Likes.findAll({
        where: {
            postId : postId
        },
        include: {
            model: Users,
            attributes: ['id', 'firstName', 'lastName']
        }
    })
    return data.map(like => like.user)
}

const createLikes = async (obj) => {
    const validate = await Likes.findOne({
        where: {
            userId: obj.userId,
            postId: obj.postId
        }
    })
    if(validate){
        return null
    }
    const data = await Likes.create({
        id: uuid.v4(),
        userId: obj.userId,
        postId: obj.postId
    })
    return data
}

module.exports = {
    findAllLikesFromPost,
    createLikes
}