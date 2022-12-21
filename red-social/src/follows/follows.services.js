const followControllers = require('./follows.controllers')

const postFollower = (req, res) =>{
    const follower = req.user.id
    const followindId = req.params.id

    followControllers.followUser(follower, followindId)
        .then(data => {
            res.status(201).json(data)
        })
        .catch(err =>{
            res.status(400).json({message: message.err})
        })
}

const getMyFallower = (req, res) => {
    const userId = req.user.id
    followControllers.findMyFollowers(userId)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err =>{
            res.status(400).json({message: message.err})
        })
}


const getMyFollowing = (req, res) =>{
    const userId = req.user.id
    followControllers.findMyFollowings(userId)
    .then(data => {
        res.status(200).json(data)
    })
    .catch(err =>{
        res.status(400).json({message: message.err})
    })
}
module.exports = {
    postFollower,
    getMyFallower,
    getMyFollowing
}