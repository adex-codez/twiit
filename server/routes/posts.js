const express = require('express');
const { Post, validate} = require('../model/post');
const { User } = require('../model/user');
const _ = require('lodash');


const router = express.Router();

router.get('/', async(req,res) => {
  const post = await Post.find().sort({ post: 1});
  
  res.send(post);
})

router.post('/', async(req,res) =>{
  const { error } = validate(req.body);
  if(error) res.status(400).send(error.details[0].message);
  
  const user = await User.findById(req.body.authorId );
  if(!user) res.status(404).send('user with the given value was not found');
  
  const post = new Post({
    content: req.body.content,
    author: {
      _id: user._id,
      username: user.username,
      email: user.email,
    }
  });
  
  await post.save();
  res.send(post);
})

router.put('/:id',async(req,res) =>{
  const post = await Post.findByIdAndUpdate(req.params.id,{
    content: req.body.content,
  },{new: true});
  res.send(post);
})

router.delete('/:id', async (req,res) =>{
  const post = await Post.findByIdAndRemove({_id: req.params.id});
  
  if(!post) return res.status(404).send('The genre with the given id was not found');
  res.send(post)
})


module.exports = router;