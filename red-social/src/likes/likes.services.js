const likesControllers = require('./likes.controllers')

const getAllLikesByPost = (req, res) => {
    const id = req.params.id 
    likesControllers.findAllLikesFromPost(id) 
        .then(data => {
            if(data){
                res.status(200).json(data)
            } else {
                res.status(404).json({message: 'Invalid ID'})
            }
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}


const postLike = (req, res) => {
    const userId = req.user.id 
    const postId = req.params.id 
    likesControllers.createLikes({userId, postId})
        .then(data => {
            if(data){
                res.status(201).json(data)
            } else {
                res.status(400).json({message: 'You already liked this post'})
            }
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}


module.exports = {
    getAllLikesByPost,
    postLike
}