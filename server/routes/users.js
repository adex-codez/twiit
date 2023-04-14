const express = require('express');
const router = express.Router();
const {User,validate} = require('../model/user')

router.get('/me', async(req,res) =>{
  throw new Error('something failed')
  const user = await User.findById(req.user._id).select('-password');
  res.send(users)
})

router.post('/',async(req,res) =>{
  const { error } = validate(req.body);
  if(error) return res.status(400).send(error.details[0].message)
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  })
  
  await user.save();
  res.send(user)
})

module.exports = router