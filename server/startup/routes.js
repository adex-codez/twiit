const express = require('express')
const users = require('../routes/users');
const error = require('../middleware/error');
const auth = require('../routes/auth');
const posts = require('../routes/posts');


module.exports = function(app){
  app.use(express.json());
  app.use('/api/users',users);
  app.use('/api/auth',auth);
  app.use('/api/posts',posts);
  app.use(error);
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  })
  
}