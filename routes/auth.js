const express = require('express');
const router = express.Router()
const controller = require('../controllers/auth')
// const { encrypt, decrypt } = require('../helpers/security')

router.post('/login', controller.logIn)

// router.post('/login', async(req, res) => {
//     const enc = encrypt(req.body)
//     console.log(enc);
//     console.log(decrypt(enc));
// })

module.exports = router;