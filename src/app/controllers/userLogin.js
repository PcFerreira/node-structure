/**
* Dependencies.
*/

const dbUserLogin = require('../models/userLogin')


/**
 * Validate the request and send a jwt token to the user.
 * @param {Object} req
 * @param {String} req.body.user
 * @param {String} req.body.password
 * @todo add jwt, bcrypt
 */

