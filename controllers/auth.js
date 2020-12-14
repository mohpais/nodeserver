const security = require('../helpers/security');
const conn = require('../database/index');
const { emptyArray } = require('../helpers/validations');
const { errorMessage, status } = require('../helpers/status');

module.exports = {
    logIn: async(req, res) => {
        const { params } = req.body;
        const data = hashing(params)
        let query = "SELECT * FROM users where email = ? and password = ?"
        conn.query(query, data, (err, result) => {
            if (err) throw err;
            if (emptyArray(result)) {
                errorMessage.message = 'User not found!'
                res.status(status.notfound).send(errorMessage)
            } else {
                const response = result[0]
                delete response.password
                delete response.created_at
                res.status(status.success).send({data: response})
            }
            return result
        })
    },
}

const hashing = (body) => {
    const {email, password} = JSON.parse(security.decrypt(body));
    const hash = security.hashingPasswordwithGlobal(email, password)
    return [email, hash]
}
