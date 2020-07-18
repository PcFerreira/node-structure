/**
 * Dependencies.
 */
const express = require('express')
const router = new express.Router()

/**
 * Middlewares
 */
const auth = require('../middlewares/auth')

/**
 * Controllers
 */
const userLogin = require('../controllers/userLogin')

/**
 * Routes
 * @todo
 */

//router.route('/user/login').post(userLogin.login)

module.exports = router