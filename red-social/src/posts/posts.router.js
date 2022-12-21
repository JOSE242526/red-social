const router = require('express').Router()

const postServices = require('./posts.services')
const passportJWT = require('../middlewares/auth.middleware')
const likeServices = require('../likes/likes.services')
const commentServices = require('../comments/comments.services')

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

router.route('/:post_id/comment')
    .get(passportJWT.authenticate('jwt', {session: false}), commentServices.getAllComments)
    .post(passportJWT.authenticate('jwt', {session: false}), commentServices.postComments)
    



module.exports = router