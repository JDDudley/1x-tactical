let express = require('express')
  ,bodyParser = require('body-parser')
  ,cors = require('cors')
  ,routes=require('./server-assets/routes/index')
  ,handlers = require('./utils/handler')
  ,server = express()
  ,port = process.env.PORT || 1776



server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))
server.use('/', express.static(`${__dirname}/public`));
server.use('/api', cors(handlers.corsOptions), routes.router)
server.use('/', handlers.defaultErrorHandler)

// server.get('/', function(req, res){
//   res.sendfile('index.html');
// });



server.listen(port, function () {
  console.log(`Server is on port: ${port}`);
})