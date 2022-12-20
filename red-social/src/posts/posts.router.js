const router = require('express').Router()

const postServices = require('./posts.services')
const passportJWT = require('../middlewares/auth.middleware')

router.route('/')
    .get(postServices.getAllPosts)
    .post(postServices.postNewPosts)

    router.route('/')
    .get(postServices.getPostsById)
    .patch(passportJWT.authenticate('jwt', {session: false}), postServices.patchPost)
    .delete(passportJWT.authenticate('jwt', {session: false}), postServices.deletePost)

module.exports = router