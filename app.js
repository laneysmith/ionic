var express = require('express'),
   app = express(),
    server = require('http').Server(app),
    io = require('socket.io')(server),
    cors = require('cors')

app.use(express.static('www'));
app.use(cors())
// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
// app.all('*', function(req, res, next) {
//    res.header("Access-Control-Allow-Origin", "*");
//    res.header("Access-Control-Allow-Headers", "X-Requested-With");
//    next();
// });

io.on('connection', function(socket){
  console.log('A user has entered')
  // socket.on('new-message', function(data){
  //   console.log('server data:', data);
  //   io.emit('recieve-message', data)
  // })
})

app.set('port', process.env.PORT || 5000);

server.listen(app.get('port'), function () {
   console.log('Express server listening on port ' + app.get('port'));
})
