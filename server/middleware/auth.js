const jwt = require('jsonwebtoken')
module.exports = function auth(req,res,next){
  const token = req.header('x-auth-token');
  if(!token) res.status(401).send('Access denied no token Provided')
  
  try{
    const decode = jwt.verify(token,process.env.jwtPrivateKey);
    req.user = decode;
    next()
  }
  catch(ex){
    res.status(400).send('Invalid token')
  }
}