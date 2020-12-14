const express = require('express');
const user = require('./user');
const auth = require('./auth');
const { encrypt, decrypt } = require('../helpers/security');
const router = express.Router();

/**
 * This home routes
*/
router.get('/', async(req, res) => {
    res.json({message: "Welcome to express!"})
})

router.post('/test', async(req, res) => {
    const enc = encrypt(req.body)
    const dec = JSON.parse(decrypt(enc))
    res.json({enc: enc, dec: dec})
})


/**
 * This user routes
*/
router.use('/user', user);

/**
 * This auth routes
*/
router.use('/auth', auth);

module.exports = router
