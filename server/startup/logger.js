const {createLogger,transports,format} = require('winston');
require('winston-mongodb')

module.exports = function(){
  const logger = createLogger({
    transports: [
      new transports.File({ 
        filename: 'combinedLog.log', 
        levels: 'info',
        format: format.json()
      }),
      new transports.File({ 
        filename: 'error.log', 
        levels: 'error',
        format: format.json()
      }),
      new transports.MongoDB({ 
        db: 'mongodb://127.0.0.1:27017/twiit'
      })
    ]  
  })
  
  logger.exceptions.handle(
    new transports.Console({colorize: true, prettyPrint: true}),
    new transports.File({filename: 'exceptions.log'})
  );
  
  logger.rejections.handle(
    new transports.File({ filename: 'rejections.log' })
  );
}


