'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const abcRoutes = require('./routes.js');
const errorHandler = require('./helper/404.js');
const notFoundHandler = require('./helper/500.js');
const middleware = require('./helper/middleware');

app.use(express.json());
app.use(abcRoutes);


app.get('/a', middleware.requestTime, middleware.handleAll);

app.get('/b',  middleware.squaredNumber(4), middleware.requestTime, middleware.handleAll);

/**
 * error handler
 */
app.use('*' , notFoundHandler);

app.use( errorHandler);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

// const serverStart = (port) => app.listen(port, () => 
//     console.log('server up on 3000'));

// module.exports = {
//     server: app,
//     start: serverStart,
// }
