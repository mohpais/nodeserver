const express = require('express');
const body = require('body-parser');
const index = require('./routes/index');
const cors = require('cors');
// const createError = require('http-errors');
const database = require('./database/index');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(body.json());
app.use(body.urlencoded({extended: true}));

/**
 * @Cors for get headers request
*/
app.use(cors())
app.use('/v1', index);

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
  
    // render the error page
    res.status(err.status || 500).json({error: err.message})
    // res.send({status: err.status, error: err.message });
});

module.exports = app


