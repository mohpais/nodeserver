const conn = require('../database/index');
const { emptyArray } = require('../helpers/validations');
const { status, errorMessage, successMessage } = require('../helpers/status');
const { hashingPassword, encrypt } = require('../helpers/security')
// const moment = require('moment');

module.exports = {
    creacteUser: async (req, res) => {
        const { role, email, username, password } = req.body
        const hash = await hashingPassword(password)
        // const created_on = moment(new Date())
        // console.log(hash);
        const created_on = new Date()
        let queryfind = "SELECT * FROM users where username = ?"
        conn.query(queryfind, username, (err, result) => {
            if (err) throw res.status(status.error).send(err);
            if (emptyArray(result)) {
                const data = [role, email, username, hash, created_on]
                // let queryinsert = "INSERT INTO `users`(`role`, `username`, `password`, `created_at`) VALUES ([value-1],[value-2],[value-3],[value-4]"
                let queryinsert = "INSERT INTO `users`(`role`, `email`, `username`, `password`, `created_at`) VALUES (?, ?, ?, ?, ?)";
                conn.query(queryinsert, data, (err, result) => {
                    if (err) throw err;
                    successMessage.message = `Successfully create user with id ${result.insertId}`
                    res.status(status.success).send(successMessage)
                })
            } else {
                errorMessage.message = 'User is defined!'
                res.status(status.error).send(errorMessage)
            }
        })
    },
    findUser: (req, res) => {
        const { username } = req.body
        let queryfind = "SELECT * FROM users where username = ?"
        conn.query(queryfind, username, (err, result) => {
            if (err) throw res.json(status.error).send(err);
            if (emptyArray(result)) {
                errorMessage.message = 'User not found!'
                res.status(status.notfound).send(errorMessage)
            } else {
                res.status(status.success).send({data: result})
            }
            return result
        })
    }
}

/**
 * This is return insert on sql
 * @const {Object} data
 */
const data = {
    fieldCount: 0,   
    affectedRows: 1, 
    insertId: 2,     
    serverStatus: 2, 
    warningCount: 1, 
    message: '',     
    protocol41: true,
    changedRows: 0
}
