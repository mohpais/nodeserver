const express = require('express');
const user = require('./user');
const auth = require('./auth');
const router = express.Router();

/**
 * This home routes
*/
router.get('/', async(req, res) => {
    res.json({message: "Welcome to express!"})
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
