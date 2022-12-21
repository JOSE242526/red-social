const Comments = require('../models/comments.models')

const uuid = require('uuid')
const Users = require('../models/users.models')
const Posts = require('../models/posts.models')

const findAllComments = async (postId) => {
    const data = await Comments.findAll({
        where: {
            postId : postId
        },
        include: {
            model: Users,
            attributes: ['id', 'firstName', 'lastName']
        },
        include: {
            model: Posts,
        }
    })
    return data.map(comment => comment.user)
}

const findCommentById = async (id) => {
    const data = await Comments.findOne({
        where: {
            id: id
        }
    })
    return data
}

const createComments = async (obj) => {
    const data = await Comments.create({
        id: uuid.v4(),
        userId: obj.userId,
        postId: obj.postId,
        content: obj.content
    })
    return data
}

const updateComment = async(id, userId, commentId, obj) => {
    const data = await Comments.update(obj, {
        where: {
            id : id,
            userId: userId,
            commentId: commentId
        }
    })
    return data[0]
}

const deleteComment = async (id) => {
    const data = await Comments.destroy({
        where: {
            id: id
        }
    })
    return data
}

module.exports = {
    findAllComments,
    findCommentById,
    createComments,
    updateComment,
    deleteComment
}