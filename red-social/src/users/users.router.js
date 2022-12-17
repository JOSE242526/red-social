const router = require('express').Router()

const userServices = require('./users.services')
const passportJWT = require('../middlewares/auth.middleware')
const roleMiddleware= require('../middlewares/role.middleware')
const { use } = require('chai')

router.route('/')
    .get(userServices.getAllUsers)
    .post(userServices.postUser)

router.route('/me')
    .get(passportJWT.authenticate('jwt', {session: false}), userServices.getMyUser)
    .patch(passportJWT.authenticate('jwt', {session: false}), userServices.patchMyUser)
    .delete(passportJWT.authenticate('jwt', {session: false}), userServices.deleteMyUser)

router.route('/:id')
    .get(userServices.getUserById)
    .patch(passportJWT.authenticate('jwt', {session: false}), roleMiddleware, userServices.patchUser)
    .delete(passportJWT.authenticate('jwt', {session: false}), roleMiddleware, userServices.deleteUser)


module.exports = router
