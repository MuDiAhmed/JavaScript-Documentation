/**
 * @apiIgnore
 * UtilityService which contain generic functions
 * @namespace UtilityService
 */

 /**
  * @apiIgnore
  * Generate a random utf-8 string with different length
  * @param {number} length - length for the returned string default to 10
  * @returns {string} random generated string
  * @memberof UtilityService
  */
let generateToken = (length = 10) => {
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

module.exports = {
    generateToken
}