'use strict';

const express = require('express');
const router = express.Router();

const middleware = require('./helper/middleware.js');

router.get('/c', middleware.randomNumber, middleware.requestTime, middleware.handleAll);

router.get('/d', middleware.raiseNextError, middleware.requestTime, middleware.handleAll);

module.exports = router;