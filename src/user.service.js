/**
 * @apiIgnore
 * UserService to handle user session.
 * @namespace UserService
 */
let utilityService = require("./utility.service");

/**
 * @apiIgnore
 * generate the user session token
 * @returns {string} user token
 * @memberof UserService
 * {@link UtilityService#generateToken|Calles generateToken to generate the token}
 */
let login = () => {
    return utilityService.generateToken();
}

module.exports = {
    login
}