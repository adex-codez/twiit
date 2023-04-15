const express = require('express');
require('express-async-errors');
const winston = require('winston')
const app = express();

require('./startup/db')()
require('./startup/logger')()
require('./startup/routes')(app);
require('./startup/config')()



const port = process.env.PORT || 3000
app.listen(port, () => winston.info(`connected to port ${port}`))