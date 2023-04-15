const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();
const {User} = require('../model/user');
const _ = require('lodash');
const Joi = require('joi');

router.post('/',async(req,res) =>{
  const { error } = validate(req.body);
  if(error) return res.status(400).send(error.details[0].message);
  
  const user = await User.findOne({ username: req.body.username });
  if(!user) res.status(400).send('Invalid username or password');
  
  const validPassword = await bcrypt.compare(req.body.password,user.password);
  if(!validPassword) res.status(400).send('Invalid username or password');
  
  const token = user.generateAuthToken();
  res.header('x-auth-token',token).send(true);
})

function validate(req){
  const Schema = Joi.object({
    username: Joi.string().required().min(5).max(255),
    password: Joi.string().required().min(8).max(20),
  })
  
  return Schema.validate(req)
}

module.exports = router