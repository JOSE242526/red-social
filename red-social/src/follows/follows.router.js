const router = require('express').Router()

const FollowServices = require('./follows.services')
const passportJWT = require('../middlewares/auth.middleware')

router.route('/')
    .get(passportJWT.authenticate('jwt', {session: false}), FollowServices.getMyFallower)
    .get(passportJWT.authenticate('jwt', {session: false}), FollowServices.getMyFollowing)

module.exports = router