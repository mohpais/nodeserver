const express = require('express');
const user = express.Router()
const controller = require('../controllers/user')

user.post('/create', controller.creacteUser)
// user.post('/create', async(req, res) => {
//     res.send('this create')
// })

module.exports = user