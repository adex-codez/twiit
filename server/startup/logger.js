const {createLogger,transports,format} = require('winston');

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
      })
    ]  
  })
}


