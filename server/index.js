const express = require('express');
const winston = require('winston')
const app = express();

require('./startup/db')()
require('./startup/logger')()
require('./startup/routes')(app);



const port = process.env.PORT || 3000
app.listen(port, () => winston.info(`connected to port ${port}`))