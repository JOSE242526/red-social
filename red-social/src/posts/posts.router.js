const router = require('express').Router()

const postServices = require('./posts.services')
const passportJWT = require('../middlewares/auth.middleware')
const likeServices = require('../likes/likes.services')

router.route('/')
    .get(postServices.getAllPosts)
    .post(passportJWT.authenticate('jwt', {session: false}), postServices.postNewPost)

router.route('/:id')
    .get(postServices.getPostById)
    .patch(passportJWT.authenticate('jwt', {session: false}), postServices.patchPost)
    .delete(passportJWT.authenticate('jwt', {session: false}), postServices.deletePost)

router.route('/:id/likes')
    .get(likeServices.getAllLikesByPost)
    .post(passportJWT.authenticate('jwt', {session: false}), likeServices.postLike)

module.exports = router