function defaultErrorHandler(err, req, res, next) {
  let error;
  console.log('Error Caught:')
  console.log(err);
  if (res.headersSent) {
    return next(err);
  }
  let env = process.env.NODE_ENV;
  if (env !== 'production') {
    error = {
      ok: false,
      error: err.message,
      stack: err.stack
    }
  }else {
    error = {
      ok: false,
      error: err.message
    }
  }
  res.send(error);
}

var whitelist = ['http://1xtactical.com','http://www.1xtactical.com']; 
var corsOptions = {
  origin: function (origin, callback) {
    var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted);
  }
};



module.exports = {
  corsOptions,
  defaultErrorHandler
}