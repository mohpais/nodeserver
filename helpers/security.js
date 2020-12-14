const security = require('../global/index');
const bcrypt = require('bcrypt');

/**
   * Verify encrypt
   * @param {Array} params
   * @returns {Boolean} True or False
*/
// const encrypt = (data) => {
//     const log = JSON.stringify(data)
//     return security.enc(log, 1, 6)
// };
const encrypt = (data) => {
    const log = JSON.stringify(data)
    return security.enc(log, 1, 6)
};

const decrypt = (data) => {
    return security.dec(data, 1, 6)
};

const hashingPassword = async(password) => {
    try {
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)
        // console.log(hash)
        return hash
    } catch (error) {
        return error
    }
}

module.exports = {
    encrypt,
    decrypt,
    hashingPassword
}