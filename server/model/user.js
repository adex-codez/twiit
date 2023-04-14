const Joi = require("joi");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 255,
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
// userSchema.methods.GenerateAuthToken = function(){
  
// }


const User = mongoose.model('User',userSchema);

function validateUser(user){
  const schema = Joi.object({
    username: Joi.string().required().min(5).max(255),
    email: Joi.string().required().min(5).max(255).email(),
    password: Joi.string().required().min(8).max(20),
  })
  
  return schema.validate(user)
};

exports.User = User;
exports.validate = validateUser;