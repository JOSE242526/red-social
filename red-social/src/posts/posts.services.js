const PostsControllers = require('./posts.controllers')

const getAllPosts = (req, res) =>{
    PostsControllers.findAllPosts()
    .then((data) => {
        res.status(200).json(data)
    })
    .catch((err) => {
        res.status(400).json({message: err.message})
    })
}

const getPostsById = (req, res) =>{
    const id = req.params.id
    PostsControllers.findPostsById(id)
    .then((data) => {
        if(data){
            res.status(200).json(data)
        } else {
            res.status(404).json({message: 'Invalid ID: ' +id})
        }
    })
    .catch((err) => {
        res.status(400).json({message: err.message})
    })
}

const postNewPosts = (req, res) => {
    const { content } = req.body
    const userId = req.user.id
    PostsControllers.createPosts({ userId, content })
        .then((data) => {
            res.status(201).json(data)
        })
        .catch((err) => {
            res.status(400).json({
                message: err.message,
            fields: {
                content: "text"
            }})
        })
}

const patchPost = (req, res) =>{
    const id = req.params.id
    const content = req.body
    const userId = req.user.id
    PostsControllers.updatePosts(id, userId, {content})
    .then(data =>{
        if(data){
            res.status(200).json({ message: `Post with id: ${id} edited succefully`})
        }else{
            res.status(400).json({message: 'Post no available'})
        }
    })
    .catch((err) => {
        res.status(400).json({message: err.message})
    })
}

const deletePost = (req, res) =>{
    const id = req.params.id
    PostsControllers.removePosts(id)
        .then(data =>{
            if(data){
                res.status(204).json(data)
            }else{
                res.status(404).json({message: 'Invalid Id'})
            }
        })
        .catch(err =>{
            res.status(400).json({message: message.err})
        })
}

module.exports = {
    getAllPosts,
    getPostsById,
    postNewPosts,
    patchPost,
    deletePost
}