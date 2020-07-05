let userService = require("./user.service");

/**
 * @api {post} /api/login Request User login
 * @apiName Login
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} token authentication token.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "token": "randomstring"
 *     }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */
let login = (req, res) => {
    let token = userService.login();
    res.write(token);
    res.end();
}

module.exports = {
    login
}