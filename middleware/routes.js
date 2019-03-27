'use strict';

const express = require('express');
const router = express.Router();

const middleware = require('./helper/middleware.js');

router.get('/c', middleware.randomNumber, middleware.requestTime,(req,res) => {
  res.status(200).send('Route C');
});

router.get('/d', middleware.raiseNextError, middleware.requestTime, (req,res) => {
  res.status(200).send('Route D');
});
module.exports = router;