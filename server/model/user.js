const Joi = require("joi");
const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 50,
    unique: true
  },
  email: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 255,
  },
  password: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 255
  }
});
userSchema.methods.generateAuthToken = function(){
  const token =  jwt.sign({ id: this._id, username: this.username},process.env.jwtPrivateKey);
  
  return token
}


const User = mongoose.model('User',userSchema);

function validateUser(user){
  const schema = Joi.object({
    username: Joi.string().required().min(5).max(50),
    email: Joi.string().required().min(5).max(255).email(),
    password: Joi.string().required().min(8).max(20),
  })
  
  return schema.validate(user)
};

exports.User = User;
exports.validate = validateUser;
exports.userSchema = userSchema;