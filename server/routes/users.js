const express = require('express');
const router = express.Router();
const _ = require('lodash')
const bcrypt = require('bcrypt');
const {User,validate} = require('../model/user');

router.get('/me', async(req,res) =>{
  const user = await User.findById(req.user._id).select('-password');
  res.send(user)
})

router.post('/',async(req,res) =>{
  const { error } = validate(req.body);
  if(error) return res.status(400).send(error.details[0].message);
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  })
  
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(req.body.password,salt);
  
  await user.save();
  
  const token = user.generateAuthToken();
  res.header('x-auth-token',token).send(_.pick(user,['_id','username','email']));
})

module.exports = router