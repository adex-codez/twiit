const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi)
const mongoose = require('mongoose');



const Post = mongoose.model('Post', new mongoose.Schema({
  post: {
    type: String,
    required: true,
    minLength: 3,
  },
  author: {
    type: mongoose.Schema({
      _id: mongoose.SchemaTypes.ObjectId,
      username: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 255,
      },
      email: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 255,
      },
    }),
    required: true
  },  
  createdAt: {
    type: Date,
    default: Date.now
  }
}))

function validatePost(req){
  const Schema = Joi.object({
    post: Joi.string().min(3).required(),
    authorId: Joi.objectId().required()
  });
  
  return Schema.validate(req)
  
}

exports.Post = Post;
exports.validate = validatePost;