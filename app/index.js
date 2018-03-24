var express = require('express');
var app = express();
var http = require('http').Server(app);
var port = process.env.PORT || 5000;

app.use(express.static(__dirname + './images'));
app.use(express.static(__dirname + './stylesheets'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/main.html', function(req, res) {
  res.sendFile(__dirname + '/main.html');
});

app.get('/confirmationPage.html', function(req, res) {
  res.sendFile(__dirname + '/confirmationPage.html');
});

app.get('/payPage.html', function(req, res) {
  res.sendFile(__dirname + '/payPage.html');
});

app.get('/reloadPage.html', function(req, res) {
  res.sendFile(__dirname + '/reloadPage.html');
});

http.listen(port, function() {
  console.log('local port number: ' + port);
});
