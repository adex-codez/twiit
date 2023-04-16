const express = require('express')
const users = require('../routes/users');
const error = require('../middleware/error');
const auth = require('../routes/auth');
const posts = require('../routes/posts');


module.exports = function(app){
  app.use(express.json())
  app.use('/api/users',users);
  app.use('/api/auth',auth);
  app.use(error)
  app.use('/api/posts',posts)
}