const express = require('express');
require('express-async-errors');
const winston = require('winston');
const app = express();
const cors = require('cors');

require('./startup/db')()
require('./startup/logger')()
require('./startup/routes')(app);
require('./startup/config')()
require('./startup/validate')();




// Enable CORS for all routes
app.use(cors({
  origin: 'http://localhost:5173/'
}))
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});




const port = process.env.PORT || 3000
app.listen(port, () => winston.info(`connected to port ${port}`))