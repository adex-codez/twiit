const mongoose = require('mongoose');
const winston = require('winston');


module.exports = function(){
  mongoose.connect('mongodb://127.0.0.1:27017/twiit', {
    useUnifiedTopology: true
  })
    .then(() => winston.info('connected to mongoDB'))
}
