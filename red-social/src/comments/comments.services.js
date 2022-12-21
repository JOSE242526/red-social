const commentsControllers = require('./comments.controllers')

const getAllComments = ( req, res ) => {
    commentsControllers.findAllPosts()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

const postComments = (req, res) =>{
    const userId = req.user.id
    const postId = req.params.post_id
    const {content} = req.body
    commentsControllers.createComments({userId, postId, content})
        .then(data =>{
            res.status(201).json(data)
        })
        .catch(err =>{
            res.status(400).json({
                message: err.message,
                fields: {
                    content: 'text'
                }
            })
        })
}


module.exports = {
    getAllComments,
    postComments
}