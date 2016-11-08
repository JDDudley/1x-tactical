let express = require('express')
let server = express()
let port = process.env.PORT || 1776
server.use(express.static(__dirname + '/public'))
server.listen(port, function(){
    console.log('Server running on port ' + port);
})