var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3200;

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/main.html', function(req, res) {
  res.sendFile(__dirname + '/main.html');
});

http.listen(port, function() {
  console.log('local port number: ' + port);
});
